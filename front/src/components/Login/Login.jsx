import "./Login.css";
import logoGris from "../../Images/logoGris.png";

function Login() {
  return (
    <div className="login">
      {/* this is the left side */}
      <div className="logo">
        <img src={logoGris} alt="" />
      </div>
      {/* this is the right side */}
      <div className="form">
        <h1>Se connecter à votre compte</h1>
        <form>
          <label>
           <span>E-mail :</span> 
            <br />
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            <span>Mot de passe :</span>
            <br />
            <input type="password" name="mdp" />
          </label>
          <br />
          <label>
            <span>Role :</span>
            <br />
            <select name="roles" form="roles">
              <option value="Choisir votre role">Choisir votre role</option>
              <option value="Administration">Administration</option>
              <option value="Enseignent">Enseignent</option>
              <option value="Elève">Elève</option>
              <option value="Parent">Parent</option>
            </select>
          </label>
          <br />
          <input type="submit" id='submit' value="Connexion" />
        </form>
        <h5>Pour créer un compte ! <a href="#">contactez-nous</a></h5>
      </div>
    </div>
  );
}

export default Login ;