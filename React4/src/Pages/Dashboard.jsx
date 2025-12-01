import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [dashboardDatas, setDashboardDatas] = useState(null);
  const navigation = useNavigate();

  const dashboardvalidation = () => {
    const currentcheck = localStorage.getItem("currentUser");

    if (!currentcheck) {
      navigation("/login");
    } else {
      setDashboardDatas(JSON.parse(currentcheck));
    }
  };

  useEffect(() => {
    dashboardvalidation();
  }, []);

  const logouthandle = () => {
    localStorage.removeItem("currentUser");
    navigation("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-300 via-blue-200 to-indigo-300 p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {dashboardDatas && (
          <div className="space-y-4">

            <p className="text-lg font-semibold text-gray-700">
              Name: <span className="font-normal">{dashboardDatas.firstname} {dashboardDatas.lastname}</span>
            </p>

            <p className="text-lg font-semibold text-gray-700">
              Email: <span className="font-normal">{dashboardDatas.email}</span>
            </p>

            <button
              onClick={logouthandle}
              className="mt-4 bg-black text-white px-4 py-1 rounded hover:bg-gray-900 duration-200"
            >
              Logout
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;