import React from "react";
import { Link } from "react-router-dom";
import churchImage from "@/assets/images/church.png";

export const SideBar = () => {
  return (
    <nav className="flex-1 space-y-1 p-4">
      <div className="p-4">
        <img src={churchImage} alt="PAROQUIA" className="rounded-lg w-full h-auto" />
      </div>
      {[
        { href: "/dashboard", label: "Dashboard" },
        { href: "/dashboard/members", label: "Feligreses" },
        { href: "/dashboard/catechesis", label: "Catequesis" },
        { href: "/dashboard/groups", label: "Grupos Pastorales" },
        { href: "/dashboard/events", label: "Eventos" },
        { href: "/dashboard/store", label: "Tienda" },
        { href: "/dashboard/finance", label: "Finanzas" },
        { href: "/dashboard/settings", label: "Configuración" },
      ].map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className="flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors hover:bg-soft-blue hover:text-church-600"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
