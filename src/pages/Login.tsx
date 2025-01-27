import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import "@/css/AuthCss.css";

const Login = () => {
  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* Sección de la Imagen */}
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      >
        {/* Contenido adicional opcional */}
      </div>

      {/* Sección del Formulario */}
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Iniciar Sesión
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu correo"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            <button className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Iniciar Sesión
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            ¿No tienes cuenta?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
