import React from "react";
import "./HobbyList.css";
function HobbyList(props) {
  const onHobbyClick = (hobby) => {
    if (props.onHobbyClick) {
      props.onHobbyClick(hobby);
    }
  };

  return (
    <ul className="hobby-list">
      {props.hobbyList.map((item, i) => {
        return (
          <li
            key={i}
            onClick={() => onHobbyClick(item)}
            className={item.id === props.activeId ? "active" : ""}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  );
}

export default HobbyList;
