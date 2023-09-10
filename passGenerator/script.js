let generado = document.getElementById("genPass");
let genPass = document.querySelector(".generate-btn");
let lc = document.getElementById("lowercase");
let num = document.getElementById("numbers");
let ed = document.getElementById("exc-duplicate");
let uc = document.getElementById("uppercase");
let symbols = document.getElementById("symbols");
let is = document.getElementById("spaces");
let pl = document.querySelector(".details input");

genPass.addEventListener("click", () => {

generado.value=generate();

})

function generate (){
    return randomize(pl.value);

};

function randomize(length) {
    let result = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbol = '!·$%&/(()=?¿';

    let characters = "abcdefghijklmnopqrstuvwxyz"; 

    let checks = [num, uc, symbols];

    checks.forEach(element => {

      if(element.checked){
        if(element.id=="numbers"){
          characters+=characters+numbers;
        }else if(element.id=="uppercase"){
          characters+=characters+upper;
        }else if(element.id=="symbols"){
          characters+=characters+symbol;
        }
      }
    });




    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}