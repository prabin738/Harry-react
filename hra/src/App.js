import "./App.css";

let name = "Prabin";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact US</li>
      </nav>
      <div className="continer">
        <h1>Hello {name}</h1>
        <p>
          "Dummy text" in the context of React, or web development in general,
          refers to placeholder content used during the development phase when
          actual content is not yet available. This allows developers to focus
          on layout, styling, and functionality without being distracted by
          meaningful text. The most common form of dummy text is "Lorem Ipsum."
        </p>
      </div>
    </>
  );
}

export default App;
