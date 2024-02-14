import Counter from "../components/counter";

const PageExtra = () => {
  return (
    <>
      <a href="https://www.canvas.umu.se/courses/13041/pages/html-och-css" className="link-external">📖 HTML/CSS - UMEÅ</a>

      <Counter />

      <table className="table-template">
        <thead>
        <tr className="head-content">
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>8791</td>
          <td>de7a</td>
          <td>fa5@mail.com</td>
        </tr>

        <tr>
          <td>7781</td>
          <td>de799a</td>
          <td>fa155@mail.com</td>
        </tr>

        <tr>
          <td>1791</td>
          <td>f8141</td>
          <td>ff11gf@mail.com</td>
        </tr>

        <tr>
          <td>7963</td>
          <td>f1a153</td>
          <td>faa15@mail.com</td>
        </tr>
        </tbody>
      </table>

      <form action="/html-css" method="get" className="form-template">
        <h2>Send Email Form</h2>
        <label className="form-input">
          Name
          <input type="text" name="name" id="name" />
        </label>

        <label className="form-input">
          To Email
          <input type="text" name="email" id="email" />
        </label>

        <label className="form-input">
          Message
          <input type="text" name="message" id="message" />
        </label>

        <button type="submit" style={{width: '100%', backgroundColor: '#12b3a9'}}>SEND EMAIL</button>
      </form>

      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WVMEwoR-114?si=gtt9Xo8JOIQeIAdr"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  )
}

export default PageExtra