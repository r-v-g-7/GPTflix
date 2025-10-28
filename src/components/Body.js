import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Body = () => {

  const Layout = () => (
    <div className="relative w-full min-h-screen overflow-auto scrollbar-netflix">
      <div className="relative z-10">
        <Outlet /> {/* route content renders here */}
      </div>
    </div>
  );

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Login /> },
        { path: "/browse", element: <Browse /> },
      ]
    }
  ]);


  return (
    <div className="relative w-full min-h-screen overflow-auto scrollbar-netflix">

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
        alt="Background"
        className="fixed inset-0 w-full h-full object-cover -z-20"
      />

      {/* Dark overlay for contrast */}
      <div className="fixed inset-0 bg-black/60 -z-10"></div>

      {/* Scrollable content above background */}
      <RouterProvider router={appRouter} />

    </div>
  );
};

export default Body;
