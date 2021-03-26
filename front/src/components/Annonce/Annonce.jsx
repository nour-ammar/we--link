import "./Annonce.css";
import { BiCopyright } from "react-icons/bi";

function Annonce() {
  return (
    <div className="annonce">
      <main>
        <div className="annonce-left">
          <form>
            <label>Publier une nouvelle annonce :</label><br/>
            <input type="textarea" />
            <input type="file" />
            <input type="submit" />
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
              <button>Afficher plus de détails</button>
            </div>
          </div>
        </div>
        <div className="annonce-right">right</div>
      </main>
    </div>
  );
}

export default Annonce;
