import { AdminLayout } from "@/layouts/AdminLayout";

const Home = () => {
  return (
    <AdminLayout>
      <div className="flex flex-col justify-center items-center h-[98%] w-[98%]">
      <h2 className="text-2xl font-semibold mb-4">Welcome to the Church Management System</h2>
          <p className="text-gray-700 mb-6">
            This is the homepage with general information and quick links.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white shadow p-4 rounded-md">
              <h3 className="text-lg font-bold">Total Members</h3>
              <p className="text-2xl font-semibold">120</p>
            </div>
            <div className="bg-white shadow p-4 rounded-md">
              <h3 className="text-lg font-bold">Events This Month</h3>
              <p className="text-2xl font-semibold">8</p>
            </div>
            <div className="bg-white shadow p-4 rounded-md">
              <h3 className="text-lg font-bold">Donations</h3>
              <p className="text-2xl font-semibold">$5,230</p>
            </div>
          </div>
      </div>
      
    </AdminLayout>
  );
};

export default Home;
