import "./Header.module.css";
import Button from "./UI/Button";
import SearchBar from "./UI/SearchBar";

export default function Header() {
  function handleChangeLanguage() {
    // TODO
  }

  return (
    <header>
      <Button to="/">
        <h1>TopVehicle</h1>
      </Button>

      <nav>
        <SearchBar />
        <ul>
          <li>
            <Button onClick={handleChangeLanguage}>
              <span>EN</span>
            </Button>
          </li>
          <li>
            <Button to="/auth">
              <span>Log In</span>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
