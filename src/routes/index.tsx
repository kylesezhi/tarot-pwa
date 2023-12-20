import { createBrowserRouter } from "react-router-dom";
import App from "./App/App";
import Error from "./Error/Error";
import AllCards from "./AllCards/AllCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/all",
    element: <AllCards />,
    errorElement: <Error />,
  },
]);

export default router;
