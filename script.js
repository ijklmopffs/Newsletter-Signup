const email_input = document.querySelector("input");
const button = document.querySelector("button");
const card = document.querySelector(".card");
const h1 = document.querySelector("h1");
const form = document.getElementById("myForm");
const checklists = document.querySelectorAll(".checklist");
const text = document.querySelector(".text_p");
const image = document.querySelector(".image");
const email = document.querySelector(".email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  h1.textContent = "Thanks for subscribing!";
  h1.style.textAlign = "center";
  checklists.forEach((checklist) => {
    checklist.style.display = "none";
  });
  text.textContent = `A confirmation email has been sent to ash@loremcompany.com. Please open it
    and click the button inside to confirm your subscription`;
  text.style.textAlign = "center";
  image.style.display = "none";
  email_input.style.display = "none";
  email.style.display = "none";
  button.textContent = "Dismiss message";
  button.style.marginTop = "0";
  button.style.width = "100%";
});
