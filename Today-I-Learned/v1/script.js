const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

//Selecting DOM Elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Creating DOM Elements:Render Facts In List
factsList.innerHTML = "";
// factsList.insertAdjacentElement("afterbegin", "<li>Nick</li>");
// factsList.insertAdjacentElement("afterbegin", "<li>Jones</li>");

//LOAD DATA FROM SUPABASE
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://ghiplnxytrghgtzujdmd.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoaXBsbnh5dHJnaGd0enVqZG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUxMDY1NjQsImV4cCI6MjAwMDY4MjU2NH0.9Mg5FJCoXGkurhock-5aTgVqbPyY3WFNSgT5Fb0mHMA",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoaXBsbnh5dHJnaGd0enVqZG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUxMDY1NjQsImV4cCI6MjAwMDY4MjU2NH0.9Mg5FJCoXGkurhock-5aTgVqbPyY3WFNSgT5Fb0mHMA",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  const filterData = data.filter((fact) => fact.category === "society");
  console.log(filterData);
}

const htmlArr = initialFacts.map((fact) => `li class="fact">${fact.text}</li>`);
console.log(htmlArr);
const html = htmlArr.join("");
factsList.insertAdjacentHTML("afterbegin", html);

//Toggle Form Visiability
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share A Fact";
  }
});

console.log([7, 64, 6 - 23, 11].filter((el) => el > 10));
console.log([7, 64, 6 - 23, 11].find((el) => el > 10));
//FUNDEMENTALS OF JAVASCRIPT

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;
//   return age;
// }
// const age1 = calcFactAge(2015);
// console.log(age1);

// let votesInteresting = 20;
// let votesMindblowing = 23;
// if (votesInteresting === votesMindblowing) {
//   alert("This fact is qually interesting and mind blowing");
// } else if (votesInteresting > votesMindblowing) {
//   console.log("Interesting Fact");
// } else if (votesInteresting < votesMindblowing) {
//   console.log("Mindblowing Fact");
// }

// let votesFalse = 77;
// let totalUpVotes = votesInteresting + votesMindblowing;
// const message =
//   totalUpVotes > votesFalse
//     ? "The fact is true"
//     : "Might be false,check other sources";
// console.log(message);

// const text = "Delhi is the capital of India";
// const upperText = text.toUpperCase();
// console.log(upperText);

// const str = `The current fact "${text}". It is ${calcFactAge(
//   2015
// )} years old. It is probably ${
//   totalUpVotes > votesFalse ? "correct" : "not true"
// }`;
// console.log(str);
// const fact = ["India is my country", 2015, true];
// console.log(fact);

// [2, 4, 6, 8].forEach(function (el) {
//   console.log(el);
// });

// const time10 = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });
// console.log(time10);

// const CATEGORIES = [
//   { name: "technology", color: "#3b82f6" },
//   { name: "science", color: "#16a34a" },
//   { name: "finance", color: "#ef4444" },
//   { name: "society", color: "#eab308" },
//   { name: "entertainment", color: "#db2777" },
//   { name: "health", color: "#14b8a6" },
//   { name: "history", color: "#f97316" },
//   { name: "news", color: "#8b5cf6" },
// ];

// const allCategories = CATEGORIES.map((el) => el.name);
// console.log(allCategories);
