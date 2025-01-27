import "@/css/AuthCss.css";
import churchImage from "@/assets/images/church.png";
import { useState, ChangeEvent  } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    "email":"",
    "password": ""
  })

  const navigate = useNavigate(); // Hook para redirigir

  const {email, password} = state;

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmit=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if (email.trim() && password.trim()) {
      navigate("/home"); // Redirige al home
    } else {
      alert("Por favor, completa los campos.");
    }
    
  }
  
  return (
    <div className="min-h-screen min-w-screen bg-red-100 grid grid-cols-2">
      {/* Sección de la Imagen */}
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${churchImage})` }}
      >
        {/* Puedes agregar contenido adicional aquí si es necesario */}
      </div>

      {/* Sección del Formulario */}
      <div className="flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value = {email}
                required
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu correo"
                onChange={onHandleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name = "password"
                required
                value = {password}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ingresa tu contraseña"
                onChange={onHandleChange}
              />
            </div>
            <button type="submit" className="w-full py-2 mt-4 text-black bg-blue-500 rounded-lg hover:bg-blue-600">
              Iniciar Sesión
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            ¿No tienes cuenta? <a href="/register" className="text-blue-500 hover:underline">Regístrate</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
