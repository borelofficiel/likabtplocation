import { RouterProvider } from "react-router-dom"; // <-- attention, pas "react-router"
import { router } from "./routes";

export default function App() {
  return <RouterProvider router={router} />;
}