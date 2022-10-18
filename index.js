const monthInx = new Date().getMonth();
console.log(monthInx); //will print the index of the month
const monthEl = document.querySelector(".date h1");
console.log(monthEl);
const fullDateEl = document.querySelector(".date p");
console.log(fullDateEl);

const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
console.log(lastDay);

const daysEl = document.querySelector(".days");
console.log(daysEl);

const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;
console.log(firstDay);

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

let days = "";

for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class='today'>${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEl.innerHTML = days;
