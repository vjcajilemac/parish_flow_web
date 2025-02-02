import React from "react";
import {
  UserIcon,
  BellAlertIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
const Header = () => {
  return (
    <div className="flex flex-row justify-around shadow-sm sradow-gray-400  h-[100%] w-[100%]">
      <div className="flex flex-col h-[100%] w-[50%] justify-center">
        <p className="text-xl text-sky-600 font-bold">
          Parroquia Nuestra Señora De La Asuncion De Aloag 
        </p>
      </div>
      <div className="grid grid-cols-3 h-[100%] w-[40%]">
        <div className="flex items-center justify-center">
          <BellAlertIcon className="h-6 w-6 text-blue-500" />
          <span>Notificaciones</span>
        </div>
        <div className="flex items-center justify-center">
          <InboxIcon className="h-6 w-6 text-blue-500" />
          <span>Mensajes</span>
        </div>
        <div className="flex items-center justify-center">
          <UserIcon className="h-6 w-6 text-blue-500" />
          <span>Perfil</span>
        </div>
      </div>
    </div>
  );
};
export default Header;
