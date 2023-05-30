import { useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(`/`);
}
    return (
      <header>
        <div className="logo" onClick = {() => handleLogoClick()}>
          <img src="placeholder_logo.png" alt="Logo" />
        </div>
        <nav>
        </nav>
      </header>
    );
  };