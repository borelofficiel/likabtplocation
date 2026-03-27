import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { EnginsPage } from "./components/EnginsPage";
import { ServicesPage } from "./components/ServicesPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "engins", Component: EnginsPage },
      { path: "services", Component: ServicesPage },
      { path: "a-propos", Component: AboutPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
