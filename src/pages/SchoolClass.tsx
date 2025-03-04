import { AdminLayout } from "@/layouts/AdminLayout";
import { getClasses } from "@/redux/features/scholar";
import { useAppDispatch/*, useAppSelector*/ } from "@/redux/hooks/hooks";
import { useEffect } from "react";

const SchoolClass: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getClasses())
  }, [])
  
  return (
    <AdminLayout>
      <div className="flex flex-col justify-center items-center h-[98%] w-[98%]">
        <div className="flex flex-row h-[15%]">
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to the Church Management System
          </h2>
        </div>
        <div className="flex flex-col justify-between h-[85%] w-[100%]">
          
          <div className="grid grid-cols-8 items-stretch h-[73%] w-[100%] gap-4">
           
            
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SchoolClass;
