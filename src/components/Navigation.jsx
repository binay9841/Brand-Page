const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src="./images/brand_logo.png" alt="logo" />
      </div>

      <ul>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navigation;
