import Home from "./components/Home";
import AddPublication from "./views/AddPublication";

export const routes = [
  { path: "/", component: Home, name: "home" },
  {
    path: "/publications/add",
    component: AddPublication,
    name: "add-publication",
  },
];
