import {useEffect} from "react";
import randomProductPromo from "../js/randomizer";
import helloWorld from "../js/hello_world";
import jQueryFunctions from "../js/functions_jquery";


const PageServices = () => {

  useEffect(() => {
    helloWorld()
    randomProductPromo()
    jQueryFunctions()
  }, [])

  return (
      <>
        <div className="tjanster">
          <div className="tjanster-tvatt">
            <div style={{display: "flex", flexDirection: 'column', gap: '10px'}}>
              <h1 style={{color: '#12b3a9'}}>Miljö Biltvätt</h1>
              <p>Vi erbjuder en miljövänlig "gör det själv" biltvätt av senaste tekniken från Kärcher.</p>
              <ul>
                <li>Avfettning</li>
                <li>Högtryck med hetvatten och schampo</li>
                <li>Skumtvätt med borste</li>
                <li>Sköljning</li>
                <li>Hetvax</li>
                <li>Ytbehandling</li>
                <li>Dammsugning</li>
              </ul>
              <p>Automatisk kortbetalning eller köp av polletter i kassan</p>
            </div>
            <img src="/react-spa/img/tvätten.jpg" alt="tvatten"/>
          </div>

          <div className="tjanster-hyrslap">
            <div className="hyrslap-card">
              <h2 style={{color: 'black'}}>Grind</h2>
              <img src="/react-spa/img/grind.jpg" alt="grind"/>
              <div>
                <div className="rad">
                  <h2>3 Timmar</h2>
                  <h2>175kr</h2>
                </div>

                <div className="rad">
                  <h2>6 Timmar</h2>
                  <h2>225kr</h2>
                </div>

                <div className="rad">
                  <h2>1 Dygn</h2>
                  <h2>295kr</h2>
                </div>
              </div>
              <div className="dimensioner">
                <h2 style={{color: 'black'}}>Dimensioner</h2>
                <div className="rad">
                  <h3>Flakmått</h3>
                  <h3>325 • 152 cm</h3>
                </div>

                <div className="rad">
                  <h3>Invändig höjd</h3>
                  <h3>Öppen</h3>
                </div>

                <div className="rad">
                  <h3>Totalvikt</h3>
                  <h3>1000 kg</h3>
                </div>

                <div className="rad">
                  <h3>Lastvikt</h3>
                  <h3>690 kg</h3>
                </div>
              </div>
            </div>

            <div className="hyrslap-card">
              <h2 style={{color: 'black'}}>Kåpa</h2>
              <img src="/react-spa/img/kapslap.png" alt="grind"/>
              <div>
                <div className="rad">
                  <h2>3 Timmar</h2>
                  <h2>235kr</h2>
                </div>

                <div className="rad">
                  <h2>6 Timmar</h2>
                  <h2>285kr</h2>
                </div>

                <div className="rad">
                  <h2>1 Dygn</h2>
                  <h2>375kr</h2>
                </div>
              </div>
              <div className="dimensioner">
                <h2 style={{color: 'black'}}>Dimensioner</h2>
                <div className="rad">
                  <h3>Flakmått</h3>
                  <h3>258 • 128 cm</h3>
                </div>

                <div className="rad">
                  <h3>Invändig höjd</h3>
                  <h3>140 cm</h3>
                </div>

                <div className="rad">
                  <h3>Totalvikt</h3>
                  <h3>1000 kg</h3>
                </div>

                <div className="rad">
                  <h3>Lastvikt</h3>
                  <h3>690 kg</h3>
                </div>
              </div>
            </div>

            <div className="hyrslap-card">
              <h2 style={{color: 'black'}}>Skåp</h2>
              <img src="/react-spa/img/skapslap.png" alt="grind"/>
              <div>
                <div className="rad">
                  <h2>3 Timmar</h2>
                  <h2>235kr</h2>
                </div>

                <div className="rad">
                  <h2>6 Timmar</h2>
                  <h2>285kr</h2>
                </div>

                <div className="rad">
                  <h2>1 Dygn</h2>
                  <h2>375kr</h2>
                </div>
              </div>
              <div className="dimensioner">
                <h2 style={{color: 'black'}}>Dimensioner</h2>
                <div className="rad">
                  <h3>Flakmått</h3>
                  <h3>258 • 128 cm</h3>
                </div>

                <div className="rad">
                  <h3>Invändig höjd</h3>
                  <h3>140 cm</h3>
                </div>

                <div className="rad">
                  <h3>Totalvikt</h3>
                  <h3>1000 kg</h3>
                </div>

                <div className="rad">
                  <h3>Lastvikt</h3>
                  <h3>690 kg</h3>
                </div>
              </div>
            </div>

            <div className="hyrslap-card">
              <h2 style={{color: 'black'}}>Flak</h2>
              <img src="/react-spa/img/flak.jpg" alt="grind"/>
              <div>
                <div className="rad">
                  <h2>3 Timmar</h2>
                  <h2>235kr</h2>
                </div>

                <div className="rad">
                  <h2>6 Timmar</h2>
                  <h2>285kr</h2>
                </div>

                <div className="rad">
                  <h2>1 Dygn</h2>
                  <h2>375kr</h2>
                </div>
              </div>
              <div className="dimensioner">
                <h2 style={{color: 'black'}}>Dimensioner</h2>
                <div className="rad">
                  <h3>Flakmått</h3>
                  <h3>258 • 128 cm</h3>
                </div>

                <div className="rad">
                  <h3>Invändig höjd</h3>
                  <h3>140 cm</h3>
                </div>

                <div className="rad">
                  <h3>Totalvikt</h3>
                  <h3>1000 kg</h3>
                </div>

                <div className="rad">
                  <h3>Lastvikt</h3>
                  <h3>690 kg</h3>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3>Vid bokning av våra hyrsläp, ring oss på 031-7020583 och uppge ditt personnummer</h3>
            <br/>
            <h3>*Ta med körkort när du hyr släpet </h3>
          </div>
        </div>

        <button className="btn-hello-world">Show Message</button>
      </>
  )
}

export default PageServices