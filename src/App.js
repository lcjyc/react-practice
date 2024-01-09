import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout children={<Outlet />} />,
      children: [
        { path: "/", element: <Page1 /> },
        { path: "/page2", element: <Page2 /> },
        { path: "/page3", element: <Page3 /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
