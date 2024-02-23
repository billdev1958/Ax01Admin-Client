import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import Login from "./pages/Login";

import AdminPanel from "./pages/AdminPanel";
import UpBlog from "./pages/UpBlog";
import AdminCategory from "./pages/AdminCategory";
import AdminBlog from "./pages/AdminBlog";

import UpdatePage from "./pages/UpdatePage";

// Router main for aplication admin
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<App />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admincategory" element={<AdminCategory />} />
        <Route path="/adminBlog" element={<AdminBlog />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/upblog" element={<UpBlog />} />
        <Route path="/logout" element={<Login />} />
        <Route path="update">
        
        <Route path=":id" element={<UpdatePage />} />
      </Route>
      </Route>



    </Routes>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
