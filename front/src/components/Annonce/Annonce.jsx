import "./Annonce.css";
import { BiCopyright } from "react-icons/bi";

function Annonce() {
  return (
    <div className="annonce">
      <main>
        <div className="annonce-left">

          <form>
            <input type="textarea" placeholder="Ecrire une nouvellle annonce..." />
            <input type="file" />
            <input type="submit" value="Publier"/>
          </form>
          <br/>
          <div className="left-pub">
            <h3>Mon historique des annonces :</h3>
            <div className="left-pub-div">
              <h4>Nom et prénom</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, quidem debitis porro vel est minima natus deserunt
                provident voluptatum sint, quae vero eveniet facere
                reprehenderit optio vitae temporibus! At, quidem.
              </p>
              <button>Détails</button>
            </div>
            <button>Afficher plus</button>
          </div>
        </div>
        <div className="annonce-right">right</div>
      </main>
    </div>
  );
}

export default Annonce;
