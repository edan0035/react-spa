const PageGrill = () => {
  return (
      <>
        <h1>Välkommen till Tappens Grill</h1>
        <div className="index">
          <div className="index-info">
            <div>
              <h3>Öppettider</h3>
              <p>Måndag - Fredag <br></br> 06:00 - 21:00</p>
              <br/>
              <p>Grill <br></br> 11:00 - 21:00</p>
              <br></br>
              <h3>Telefon</h3>
              <p>031-7020583</p>
            </div>

            <div className="dagens-lunch">
              <div>
                <h3 style={{color: 'white'}}>Dagens Lunch</h3>
                <h3 style={{color: 'white'}}>Vardagar 11-15</h3>
              </div>
              <div>
                <h2>2 Korvar</h2>
                <h3>(Mos eller pommes och gurka)</h3>
              </div>

              <div>
                <h2>Tjock Korv</h2>
                <h3>(Mos eller pommes och gurka)</h3>
              </div>

              <div>
                <h2>5 Kötbullar</h2>
                <h3>(Mos eller pommes och gurka)</h3>
              </div>

              <div>
                <h2>Hamburgaretallrik 90g</h2>
                <h3>(Mos eller pommes och gurka)</h3>
              </div>

              <div>
                <h2>Falafal / Vegoburgare</h2>
                <h3>(Mos eller pommes och gurka)</h3>
              </div>
            </div>

            <div className="dagens-lunch">
              <div>
                <h2>Nötbit eller Schnitzel</h2>
                <h3>(Mos eller pommes och gurka)</h3>
              </div>
              <div>
                <h2>Kebabtallrik</h2>
                <h3>(Mos eller pommes och gurka)</h3>
              </div>

              <div>
                <h2>Hamburgaretallrik</h2>
                <h3>(Mos eller pommes och gurka)</h3>
              </div>

              <div>
                <h2>Pytt i Panna</h2>
                <h3>(Mos eller pommes och gurka)</h3>
              </div>

              <div>
                <h2>10st köttbullar</h2>
                <h3>(Mos eller pommes och gurka)</h3>
              </div>
            </div>
          </div>

          <div className="grill-images">
            <img src="/react-spa/img/Tappen7.jpg" alt="tappen" />
              <img src="/react-spa/img/Tappen5.jpg" alt="tappen" />
          </div>

          <h2>031-7020583</h2>
        </div>
      </>
  )
}

export default PageGrill