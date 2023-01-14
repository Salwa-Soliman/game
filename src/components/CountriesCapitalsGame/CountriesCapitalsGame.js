import React, { useMemo } from "react";
import "./CountriesCapitalsGame.css";
import {
  restoreOriginalStyle,
  checkIfMatched,
  reset,
  shuffle,
} from "../helpers";

const CountriesCapitalsGame = ({ data }) => {
  const shuffledData = useMemo(() => shuffle(data), [data]);
  const selectedButtons = [];

  const onClickHandler = (e) => {
    // check if there's already unmatched buttons
    const isNotMatched = selectedButtons.every((button) =>
      button.classList.contains("not-matched")
    );

    // remove unmatched styles & reset selectedButtons list
    if (isNotMatched) {
      restoreOriginalStyle(selectedButtons);
    }

    // toggle 'selected' class
    e.target.classList.toggle("selected");

    // remove button from buttons list if it's already selected
    if (selectedButtons[0]?.textContent === e.target.textContent) {
      reset(selectedButtons);
      console.log("button removed from selectedButtons");
      return;
    }
    // push to selectedButtons if not exist there
    selectedButtons.push(e.target);
    console.log("added to selectedButtons");

    if (selectedButtons.length === 2) {
      checkIfMatched(selectedButtons, data);
    }
  };

  return (
    <div>
      {shuffledData.map((item) => (
        <button key={item} onClick={onClickHandler}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default CountriesCapitalsGame;
