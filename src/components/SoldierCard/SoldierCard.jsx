import PropTypes from "prop-types";

export default function SoldierCard({
  soldier: { name, rank, age, spec, skills, active, avatar },
}) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h2>
        <b>Name:</b> {name}
      </h2>
      <p>
        <b>Rank:</b> {rank}
      </p>
      <p>
        <b>Age:</b> {age}
      </p>
      <p>
        <b>Spec:</b> {spec}
      </p>
      <p>
        <b>Skills:</b> {skills.join(", ")}
      </p>
      <p>
        <b>Activity:</b> {active ? "active" : "retired"}
      </p>
    </div>
  );
}

SoldierCard.propTypes = {
  name: PropTypes.string,
  rank: PropTypes.string,
  age: PropTypes.number,
  spec: PropTypes.string,
  skills: PropTypes.array,
  active: PropTypes.bool,
};
