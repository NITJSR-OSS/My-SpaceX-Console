import React from "react";
import Heading from "../../UI/Heading/Heading";
import Rockets from "../UpcomingLaunches/Rockets/Rockets";

const latestLaunches = (props) => {
  const value = props.present;
  const name = [];
  const time = [];
  const number = [];
  const image = [];
  const id = [];
  name.push(value.name);
  time.push(value.date_unix);
  number.push(value.flight_number);
  image.push(value.links.patch.small);
  id.push(value.id);

  return (
    <div>
      <Heading title="Latest Launches" />
      <Rockets
        name={name}
        time={time}
        number={number}
        image={image}
        id={id}
        timing="ago"
      />
    </div>
  );
};

export default latestLaunches;
