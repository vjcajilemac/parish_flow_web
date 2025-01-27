import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { NavLink } from 'react-router-dom';


const Register = () => {
  return (
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
  )
}
export default Register;