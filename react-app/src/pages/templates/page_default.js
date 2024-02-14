import Header from "../../components/header";
import Footer from "../../components/footer";
import {Helmet} from "react-helmet";

const PageDefault = ({content, title}) => {
  return (
      <>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>{title}</title>
        </Helmet>
        <Header/>
        <main>
          {content}
        </main>
        <Footer />
      </>
  )
}

export default PageDefault