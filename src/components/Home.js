const Home = (props) => {
  return (
    <div className="home">
      <button
        className="buttonEdit"
        onClick={() =>
          props.setTheme(
            props.theme === "whitetheme" ? "darktheme" : "whitetheme"
          )
        }
      >
        Theme!
      </button>
      <h1>Cookies and Beyond</h1>
      <h3>Where cookie maniacs gather</h3>
      <img
        alt="cookie shop"
        src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
      />
    </div>
  );
};

export default Home;
