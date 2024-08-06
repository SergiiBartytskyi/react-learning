import PropTypes from "prop-types";
import SoldierCard from "../SoldierCard/SoldierCard";

export default function SoldiersList({ soldiers }) {
  return (
    <ul>
      {soldiers.map((soldierOne) => {
        return (
          <li key={soldierOne.id}>
            <SoldierCard soldier={soldierOne} />
          </li>
        );
      })}
    </ul>
  );
}

SoldiersList.propTypes = {
  soldiers: PropTypes.array,
};
