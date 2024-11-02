import Title from "./Title";
import Personne from "./Personne";
import Footer from "./Footer";

const App = () => {
  const title = "Welcome to My App";

  const peoplePersonne = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  const footerText = "© 2023 My App";

  return (
    <div>
      <Title title={title}/>
      <Personne people={peoplePersonne}/>
      <Footer footerText={footerText}/>
    </div>
  );
};

export default App;