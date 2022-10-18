const monthInx = new Date().getMonth();
console.log(monthInx); //will print the index of the month
const monthEl = document.querySelector(".date h1");
console.log(monthEl);

//get array of month
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//print current month
console.log(months[monthInx]);

monthEl.innerText = months[monthInx];
