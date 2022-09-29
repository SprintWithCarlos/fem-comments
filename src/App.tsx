import { useEffect } from "react";
import data from "@/data.json";
import CardList from "./design-system/organisms/cardList/CardList";

const App = () => {
  useEffect(() => {
    document.title = "Frontend Mentor | Space tourism website";
  }, []);

  return (
    <main>
      <div className="container">
        <CardList data={data} />
      </div>
    </main>
  );
};

export default App;
