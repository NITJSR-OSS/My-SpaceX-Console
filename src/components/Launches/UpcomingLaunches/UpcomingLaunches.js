import React from "react";
import Rockets from "./Rockets/Rockets";
import Heading from "../../UI/Heading/Heading";

const upcomingLaunches = (props) => {
  const obj = props.future;
  const name = [];
  const time = [];
  const number = [];
  const image = [];
  const id = [];
  obj.forEach((value) => {
    name.push(value.name);
    time.push(value.date_unix);
    number.push(value.flight_number);
    image.push(value.links.patch.small);
    id.push(value.id);
  });

  return (
    <div>
      <Heading title="Upcoming Launches" />
      <Rockets
        name={name}
        time={time}
        number={number}
        image={image}
        id={id}
        timing="left"
      />
    </div>
  );
};

export default upcomingLaunches;
