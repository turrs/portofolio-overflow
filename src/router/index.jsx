import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Explore, Project, PullRequest } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/pull-request" element={<PullRequest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
