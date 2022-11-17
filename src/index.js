function main() {
  document.querySelector("#first-input").focus();
  inputs = Array.from(document.querySelectorAll("input"));
  inputs.map((input) => input.setAttribute("maxlength", "1"));
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});
// input.setAttribute("maxlenght", 1)
