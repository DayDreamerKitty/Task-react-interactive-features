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
      <div class="words word-1">
        <span>C</span>
        <span>O</span>
        <span>O</span>
        <span>K</span>
        <span>I</span>
        <span>E</span>
        <span>S</span>
      </div>

      <div class="words word-2">
        <span>A</span>
        <span>N</span>
        <span>D</span>
      </div>

      <div class="words word-3">
        <span>B</span>
        <span>E</span>
        <span>Y</span>
        <span>O</span>
        <span>N</span>
        <span>D</span>
      </div>
      <h3>Where cookie maniacs gather</h3>
      <img
        alt="cookie shop"
        src="https://i.pinimg.com/originals/8f/cf/71/8fcf719bce331fe39d7e31ebf07349f3.jpg"
      />
    </div>
  );
};

export default Home;
