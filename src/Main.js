import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ManageUsers, EditUsers } from "./pages";
import AddUsers from "./pages/AddUsers";

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ManageUsers />} />
        <Route path="/add" element={<AddUsers />} />
        <Route path="/edit" element={<EditUsers />} />
        <Route path="*" element={<div>Page Not Found.</div>} />
      </Routes>
    </Router>
  );
};

export default Main;
