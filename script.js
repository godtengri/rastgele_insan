const names = ["Mehmet", "Elif", "Ali", "Muhammed", "Adal", "Ağıç", "Şaban", "Selahettin", "Demir", "Berk"];
const surnames = ["ABACIOĞLU", "ÇALIŞKANTÜRK", "DEMİR", "TURGUT", "ZÜMRÜT", "ELMAS", "Amcıoğulları", "Zurna", "Allahlı", "Allahsız"];

const generate = document.getElementById("generate-button");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const birthDate = document.getElementById("birth-date");
const age = document.getElementById("age");

generate.addEventListener("click", () => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  const randomYear = Math.floor(Math.random() * (2003 - 1940 + 1) + 1940);
  const randomMonth = Math.floor(Math.random() * (12 - 1 + 1) + 1);
  const randomDay = Math.floor(Math.random() * (31 - 1 + 1) + 1);
  const today = new Date();
  const currentYear = today.getFullYear();
  const randomAge = currentYear - randomYear;

  name.textContent = `İsim: ${randomName}`;
  surname.textContent = `Soyisim: ${randomSurname}`;
  birthDate.textContent = `Doğum Tarihi: ${randomMonth}/${randomDay}/${randomYear}`;
  age.textContent = `Yaş: ${randomAge}`;
});