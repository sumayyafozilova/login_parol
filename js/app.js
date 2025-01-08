let elInput1 = document.getElementById("login");
let elInput2 = document.getElementById("password");
let elBtn = document.getElementById("btn");
let elOutput = document.getElementById("output"); 

elBtn.addEventListener('click', function () {
    let login = elInput1.value; 
    let password = elInput2.value; 
    
    if (login === "Sumayya" && password === "1234") {
        elOutput.textContent = "Login yoki parol xato";
        elOutput.style.color = "green"; 
    } else {
        elOutput.textContent = "Login yoki parol xato";
        elOutput.style.color = "red"; 
    }
});