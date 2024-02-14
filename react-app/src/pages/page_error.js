import {Link} from "react-router-dom";

const PageError = () => {
  return (
      <div className='error-page'>
        <h1 style={{color: 'red'}}>PAGE NOT FOUND</h1>
        <Link to='/' className='error-back-link'>📄 BACK TO MAIN PAGE</Link>
      </div>
  )
}

export default PageError