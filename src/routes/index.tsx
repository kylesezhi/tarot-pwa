import { createBrowserRouter } from "react-router-dom";
import App from "../routes/App/App";
import Error from "../routes/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
]);

export default router;
