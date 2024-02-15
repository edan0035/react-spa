import Header from "../components/header";
import Footer from "../components/footer";
import {Helmet} from "react-helmet";
import {Outlet} from "react-router-dom";

const PageDefault = ({ title}) => {
  return (
      <>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>{title}</title>
        </Helmet>
        <Header/>
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
  )
}

export default PageDefault