const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const outputDiv = document.querySelector(".output");
const text1 = "YJHD";
const text2 = "ZNMD";
function btn1Handler(){
  fetch("https://mock-practice.prakhar10v.repl.co/bollywood?name=" + text1)
  .then(response => response.json())
  .then(json => outputDiv.innerText = json.message);
}
function btn2Handler(){
  fetch("https://mock-practice.prakhar10v.repl.co/bollywood?name" + text2)
  .then(response => response.json())
  .then(json.message = "ZNMD")
}
btn1.addEventListener("click", btn1Handler)
btn2.addEventListener("click", btn2Handler)