import "./Annonce.css";
import { HiChevronDoubleDown } from "react-icons/hi";
import { CgDetailsMore } from "react-icons/cg";
import { MdSend} from "react-icons/md";

function Annonce() {
  return (
    <div className="annonce">
      <main>
        <div className="annonce-left">
          <form>
            <input
              type="textarea"
              placeholder="Ecrire une nouvellle annonce..."
            />
            <input type="file" />
            <MdSend title="publier"  className="send" />{" "}
          </form>
          <br />
          <div className="left-pub">
            <h3>Mon historique des annonces :</h3>
            <div className="left-pub-div">
              <div>
                <img src="https://routemagazine.org/wp-content/uploads/2020/06/photo-cv-lyon-1.jpg" />
                <h5 className="rl">Administration</h5>
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>Nom et prénom</h4>{" "}
                  <CgDetailsMore title="Détails" className="hi" />
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magnam, quidem debitis porro vel est minima natus deserunt
                  provident voluptatum sint, quae vero eveniet facere
                  reprehenderit optio vitae temporibus! At, quidem.
                </p>
              </div>
            </div>
            <center>
              <HiChevronDoubleDown className="hi" title="Afficher plus" />
            </center>
          </div>
        </div>
        <div className="annonce-right">
          <div className="left-pub">
            <h3>Les annones</h3>
            <div className="left-pub-div">
              <div>
                <img src="https://routemagazine.org/wp-content/uploads/2020/06/photo-cv-lyon-1.jpg" />
                <h5 className="rl">Enseignant</h5>
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>Nom et prénom</h4>{" "}
                  <CgDetailsMore title="Détails" className="hi" />
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magnam, quidem debitis porro vel est minima natus deserunt
                  provident voluptatum sint, quae vero eveniet facere
                  reprehenderit optio vitae temporibus! At, quidem.
                </p>
              </div>
            </div>
            <div className="left-pub-div">
              <div>
                <img src="https://routemagazine.org/wp-content/uploads/2020/06/photo-cv-lyon-1.jpg" />
                <h5 className="rl">Enseignant</h5>
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4>Nom et prénom</h4>{" "}
                  <CgDetailsMore title="Détails" className="hi" />
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magnam, quidem debitis porro vel est minima natus deserunt
                  provident voluptatum sint, quae vero eveniet facere
                  reprehenderit optio vitae temporibus! At, quidem.
                </p>
              </div>
            </div>
            <center>
              <HiChevronDoubleDown className="hi" title="Afficher plus" />
            </center>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Annonce;
