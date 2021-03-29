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
              <div>
              <img src="https://routemagazine.org/wp-content/uploads/2020/06/photo-cv-lyon-1.jpg"/>
              <h5 className="rl">Administration</h5>
             </div>
              <div>
              <h4>Nom et prénom</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, quidem debitis porro vel est minima natus deserunt
                provident voluptatum sint, quae vero eveniet facere
                reprehenderit optio vitae temporibus! At, quidem.
              </p>
              <button>Détails</button>
              </div>
              
            </div>
            <button className="plus">Afficher plus</button>
          </div>
        </div>
        <div className="annonce-right">
        <div className="left-pub">
            <h3>Les annones</h3>
            <div className="left-pub-div">
              <div>
              <img src="https://lh3.googleusercontent.com/proxy/URrwGKcD6d7xhYxnif0gBnhv7LGxmRr_R19hkU9FKGwt0WQHlK2PVJ0es4gPE_PFKzFTiSaVx9dUc6jRp24HSbpPodNlZsKlX2N-8JyEd6I7"/>
              <h5 className="rl">Enseignant</h5>

              </div>
              <div>
              <h4>Nom et prénom</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, quidem debitis porro vel est minima natus deserunt
                provident voluptatum sint, quae vero eveniet facere
                reprehenderit optio vitae temporibus! At, quidem.
              </p>
              <button>Détails</button>
              </div>
              
            </div>
            <button className="plus">Afficher plus</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Annonce;
