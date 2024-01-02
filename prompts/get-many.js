const { exec } = require("child_process");
const interpretations = require("../src/store/interpretations.json");
const fs = require("fs");
const prompt = fs.readFileSync("./prompt.txt", "utf-8");

const removeJsonFormatting = (str) => {
  return str.replace(/```json/, "").replace(/```/, "");
};

const verifyJson = (jsonMaybe) => {
  try {
    const json = JSON.parse(jsonMaybe);
    return json;
  } catch (e) {
    return null;
  }
};

const saveFile = (json) => {
  const filepath = "./interpretations.json";
  try {
    fs.writeFileSync(filepath, JSON.stringify(json), "utf-8");
    console.log(`${filepath} written successfully!`);
  } catch (error) {
    console.error(`Error writing ${filepath}: `, error);
  }
};

const appendError = (error) => {
  const filePath = "./errors.log";
  try {
    let existingContent = fs.readFileSync(filePath, "utf-8"); // Read existing content
    fs.writeFileSync(filePath, existingContent + error, "utf-8");
    console.log("Content appended successfully!");
  } catch (error) {
    console.error("Error appending to file:", error);
  }
};

const askBard = (interpretations, index) => {
  const promptWithTitle = `'Title: ${interpretations[index].name}\n${prompt}'`;
  exec(`./bard-cli ${promptWithTitle}`, (error, stdout, stderr) => {
    if (error) {
      console.error("Error:", error);
    } else if (stderr) {
      console.error("Standard error:", error);
    } else {
      const jsonMaybe = verifyJson(removeJsonFormatting(stdout));
      if (jsonMaybe !== null) {
        interpretations[index].affirmations = jsonMaybe.affirmations;
        console.log(jsonMaybe);
      } else {
        console.log("Invalid JSON returned: " + interpretations[index].name);
        console.log(stdout);
        appendError(
          index +
            " Invalid JSON returned: " +
            interpretations[index].name +
            "\n" +
            stdout,
        );
      }
    }

    // Recursion
    if (index + 1 >= interpretations.length) {
      console.log("done.");
      saveFile(interpretations);
      return;
    }
    askBard(interpretations, index + 1);
  });
};

askBard(interpretations, 0);
