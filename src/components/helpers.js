export const shuffle = (data) => {
  console.log("shuffle");
  return [...Object.keys(data), ...Object.values(data)].sort(
    (_) => Math.random() - 0.5
  );
};

export const restoreOriginalStyle = (buttons) => {
  // remove all classes
  buttons.forEach((button) => {
    button.classList = "";
  });
  // reset selected buttons list
  reset(buttons);
};

export const reset = (buttons) => {
  // reset | empty array of selected buttons
  buttons.splice(0, 2);
};

export const checkIfMatched = (buttons, data) => {
  // check if matched
  const isMatched = Object.entries(data).some(
    (item) =>
      item.includes(buttons[0].textContent) &&
      item.includes(buttons[1].textContent)
  );

  if (isMatched) {
    console.log("matched");
    buttons.forEach((button) => button.classList.add("matched"));
    reset(buttons);
  } else {
    console.log("not matched");
    buttons.forEach((button) => button.classList.add("not-matched"));
  }
};
