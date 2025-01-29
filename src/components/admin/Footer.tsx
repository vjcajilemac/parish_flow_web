import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Obtiene el año actual
  return (
    <div className="grid grid-cols-1 text-center border-t-1 border-gray-400">
      
      <p>&copy; {currentYear} Victor Cajilema. All rights reserved.</p>
    </div>
  );
};
