const raisinAlarm = function(cookie) {
  for (const ingredient of cookie) {
    if (ingredient === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

//--- Stretch Activity ---
const raisinAlarmArray = function(cookies) {
  let alerts = [];
  for (let i = 0; i < cookies.length; i++) {
    for (let j = 0; j < cookies[i].length; j++) {
      if (cookies[i][j] === "🍇") {
        alerts.push("Raisin alert!");
        break;
      } else if (j === cookies[i].length - 1) {
        alerts.push("All good!");
      }
    }
  }
  return alerts;
};

//Test code for arrays of arrays
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍫"],
    ["🍫", "🍫", "🍫"],
    ["🍫", "🍫", "🍫"],
  ])
);