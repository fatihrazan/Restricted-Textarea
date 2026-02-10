const closeBtn = document.getElementById("closebutton");
const cookieBtn = document.getElementById("cookiebtn");
const cookies = document.getElementById("cookie");

if(localStorage.getItem(cookies.id) === "hidden"){
    cookies.classList.add("hidden");
}

closeBtn.addEventListener("click",() => {
    cookies.classList.add("hidden");
});


cookieBtn.addEventListener("click",() => {
    cookies.classList.add("hidden");
    localStorage.setItem(cookies.id,"hidden");
});


const text = document.getElementById("text-input");
const charCount = document.getElementById("curLen");
const info = document.getElementById("info");

text.addEventListener("input",() => {
    const len = text.value.length;
    
    charCount.textContent = len;

    if(len === 250){
        info.classList.add("maxLen");
    }else{
        info.classList.remove("maxLen");
    }
});