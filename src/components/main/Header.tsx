import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="container d-flex justify-content-center">
      <div className="m-3">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/60px-Marvel_Logo.svg.png"
            alt="logo"
          />
        </Link>
      </div>
    </header>
  );
};
