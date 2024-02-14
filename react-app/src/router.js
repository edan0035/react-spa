import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageError from "./pages/page_error";
import PageGrill from "./pages/page_grill";
import PageDefault from "./pages/templates/page_default";
import PageAbout from "./pages/page_about";
import PagePizzeria from "./pages/page_pizzeria";
import PageServices from "./pages/page_services";
import PageContact from "./pages/page_contact";
import PageExtra from "./pages/page_extra";

const router = createBrowserRouter([
  { path: '/react-spa', element: <PageDefault content={<PageGrill/>} title='Grill' /> },
  { path: '/react-spa/pizzeria', element: <PageDefault content={<PagePizzeria/>} title='Pizzeria' /> },
  { path: '/react-spa/tjanster', element: <PageDefault content={<PageServices/>} title='Tjanster' /> },
  { path: '/react-spa/kontakt', element: <PageDefault content={<PageContact/>} title='Kontakt' /> },
  { path: '/react-spa/om', element: <PageDefault content={<PageAbout/>} title='Om' /> },
  { path: '/react-spa/extra', element: <PageDefault content={<PageExtra/>} title='Extra' /> },
  { path: '*', element: <PageError/> }
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router