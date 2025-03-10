import React from "react";

function Home() {
  const showHobbies = () => {
    alert(
      "My hobbies include playing games, watching streamers, learning new stuff, and making things hard for myself!"
    );
  };
  return (
    <section id="home" className="container my-5">
      <h2>Welcome!</h2>
      <p>
        Hi, I'm Niel and I am an Irregular - 3rd Year College Student. My
        academic interests include programming and learning about it.
      </p>
    </section>
  );
}

export default Home;
