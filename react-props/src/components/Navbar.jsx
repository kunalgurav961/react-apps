const Navbar = (props) => {
  return (
    <div>
      <h1>Navbar</h1>
      <p> {props.user.name} </p>
    </div>
  );
};

export default Navbar;
