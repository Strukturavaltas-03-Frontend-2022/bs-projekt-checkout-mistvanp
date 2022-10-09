"use strict";

const countrySelect = document.querySelector("#countrySelect");
const stateSelect = document.querySelector("#stateSelect");

const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "IllinoisIndiana",
  "Iowa",
  " Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "MontanaNebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "PennsylvaniaRhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const huCounties = [
  "Bács-Kiskun",
  "Baranya",
  "Békés",
  "Borsod-Abaúj-Zemplén",
  "Csongrád-Csanád",
  "Fejér",
  "Győr-Moson-Sopron",
  "Hajdú-Bihar",
  "Heves",
  "Jász-Nagykun-Szolnok",
  "Komárom-Esztergom",
  "Nógrád",
  "Pest",
  "Somogy",
  "Szabolcs-Szatmár-Bereg",
  "Tolna",
  "Vas",
  "Veszprém",
  "Zala",
];

countrySelect.addEventListener("change", () => {
  if (countrySelect.value === "1") {
    createStates(usStates);
  } else if (countrySelect.value === "2") {
    createStates(huCounties);
  } else {
    stateSelect.innerHTML += "";
    return;
  }
});

const createStates = (states) => {
  stateSelect.innerHTML = ``;
  stateSelect.innerHTML += `<option selection>Choose...</option>`;
  states.forEach((state) => {
    const option = document.createElement("option");
    option.innerHTML = state;
    stateSelect.insertAdjacentElement("beforeend", option);
  });
};