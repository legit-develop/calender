const monthInx = new Date().getMonth();
console.log(monthInx); //will print the index of the month
const monthEl = document.querySelector(".date h1");
console.log(monthEl);
const fullDateEl = document.querySelector(".date p");
console.log(fullDateEl);

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
fullDateEl.innerText = new Date().toDateString();
