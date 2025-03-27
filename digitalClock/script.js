const elements = {
  paraToday: document.querySelector(".today"),
  paraHours: document.querySelector(".hours"),
  paraMinutes: document.querySelector(".minutes"),
  paraSeconds: document.querySelector(".seconds"),
  toDate: document.querySelector(".toDate"),
  toMonth: document.querySelector(".toMonth"),
  toYear: document.querySelector(".toYear"),

};

const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];


const updateClock = () => {
  const todayDate = new Date();
  // setting time
  elements.paraToday.textContent = daysArray[todayDate.getDay()];
  elements.paraHours.textContent = String(todayDate.getHours()).padStart(
    2,
    "0"
  );
  elements.paraMinutes.textContent = String(todayDate.getMinutes()).padStart(
    2,
    "0"
  );
  elements.paraSeconds.textContent = String(todayDate.getSeconds()).padStart(
    2,
    "0"
  );

  // setting up date
  elements.toDate.textContent = todayDate.getDate();
  elements.toMonth.textContent = monthArray[todayDate.getMonth()];
  elements.toYear.textContent = todayDate.getFullYear();

};

setInterval(updateClock, 1000);
updateClock();
