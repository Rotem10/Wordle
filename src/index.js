function main() {
  const inputs = Array.from(document.querySelectorAll("input"));
  let id = 1;
  inputs.forEach((input) => {
    input.setAttribute("maxlength", "1");
    input.setAttribute("id", id);
    id++;
    input.addEventListener("keyup", (event) => {
      event.preventDefault();
      input.value = event.target.value.toUpperCase();
      const nextId = Number(event.target.id) + 1;
      document.getElementById(nextId).focus();
    });
  });
  document.getElementById("1").focus();
}

document.addEventListener("DOMContentLoaded", () => {
  main();
});
