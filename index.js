function Greetings() {
  return <h1>Hello readers, Thankyou for reading this blog !</h1>;
}

// Render the component to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greetings />);
