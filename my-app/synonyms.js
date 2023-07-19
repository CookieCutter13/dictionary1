import React from "react";
import "./synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <p key={index}>{synonym}</p>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
