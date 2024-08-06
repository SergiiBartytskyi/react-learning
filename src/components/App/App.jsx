import "./App.css";
import officers from "../../officers.json";
import moduleName from "../SoldiersList/SoldiersList";
import SoldiersList from "../SoldiersList/SoldiersList";

export default function App() {
  return (
    <div>
      <SoldiersList soldiers={officers} />
    </div>
  );
}
