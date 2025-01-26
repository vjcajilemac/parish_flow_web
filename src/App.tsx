import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Home = () => (
  <div className="p-4">
    <h1 className="text-xl font-bold">Welcome to Church Management</h1>
    <p>Manage catechism, workshops, pastoral groups, and more.</p>
  </div>
);

const Catechism = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold">Catechism Management</h2>
    <p>Manage classes, students, and schedules here.</p>
  </div>
);

const Workshops = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold">Workshops</h2>
    <p>Handle workshop registrations and schedules here.</p>
  </div>
);

const Login = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <Card className="w-full max-w-md p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <Button className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
          Login
        </Button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <NavLink to="/register" className="text-blue-500 hover:underline">
          Sign Up
        </NavLink>
      </p>
    </Card>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-white font-bold" : "text-gray-200"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/catechism"
                className={({ isActive }) =>
                  isActive ? "text-white font-bold" : "text-gray-200"
                }
              >
                Catechism
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/workshops"
                className={({ isActive }) =>
                  isActive ? "text-white font-bold" : "text-gray-200"
                }
              >
                Workshops
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-white font-bold" : "text-gray-200"
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catechism" element={<Catechism />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
