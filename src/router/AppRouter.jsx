import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import TaskTracker from "../pages/tasks/TaskTracker";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/tasks" element={<TaskTracker />} />
      <Route path="" element={<Home />} />
    </Routes>
  );
};
export default AppRouter;
