import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import SchoolClass from "@/pages/SchoolClass";


const InternalRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/classes" element={<SchoolClass />} />
      
    </Routes>
  );
};

export default InternalRoutes;