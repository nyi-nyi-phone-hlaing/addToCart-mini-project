import "./Nav.css";
const Nav = () => {
  return (
    <nav className='nav-bar'>
      <h1>Shoppy.io</h1>
      <button>
        Cart <span>( 1 )</span>
      </button>
    </nav>
  );
};

export default Nav;
