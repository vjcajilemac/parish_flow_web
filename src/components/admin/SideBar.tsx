import React from "react";

export const SideBar = () => {
  return (
    <nav className="p-4">
      <ul className="space-y-2">
        <li>
          <a href="#" className="block p-2 rounded hover:bg-blue-100">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-blue-100">
            Members
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-blue-100">
            Activities
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-blue-100">
            Finance
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-blue-100">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};
