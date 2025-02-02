import { Footer } from "@/components/admin/Footer";
import Header from "@/components/admin/Header";
import { SideBar } from "@/components/admin/SideBar";
import React from "react";

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-screen min-w-screen flex flex-row">
      {/* Sidebar content */}
      <aside className="hidden w-[15%] flex-col md:flex bg-gray-200">
        <SideBar />
      </aside>
      <div className="flex flex-col justify-around items-center bg-white shadow h-[100vh] w-[85%] ">
        {/* Header content */}
        <header className="flex flex-col h-[8%] w-[100%]">
          <Header />
        </header>
        {/* Main content */}
        <main className="flex flex-col justify-center items-center h-[85%] w-[95%]">
          {children}
        </main>
        <footer className=" w-[100%]">
          <Footer />
        </footer>
      </div>
    </div>
  );
};
