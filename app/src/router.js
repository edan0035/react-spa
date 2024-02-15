import { createHashRouter, RouterProvider } from "react-router-dom";

import PageError from "./pages/page_error";
import PageGrill from "./pages/page_grill";
import PageDefault from "./layouts/page_default";
import PageAbout from "./pages/page_about";
import PagePizzeria from "./pages/page_pizzeria";
import PageServices from "./pages/page_services";
import PageContact from "./pages/page_contact";
import PageExtra from "./pages/page_extra";

const router = createHashRouter([
  {
    path: '/', element: <PageDefault title='test'/>,
    children: [
        { path: '', element: <PageGrill/> },
        { path: 'pizzeria', element: <PagePizzeria/> },
        { path: 'tjanster', element: <PageServices/> },
        { path: 'kontakt', element: <PageContact/> },
        { path: 'om', element: <PageAbout/> },
        { path: 'extra', element: <PageExtra/> },
    ]
  },
  { path: '*', element: <PageError/> }
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router