// ==========================
// Gujarati Trader Premium
// script.js
// ==========================

// Replace with your WhatsApp number
const WHATSAPP_NUMBER = "919999999999";

// Replace with your UPI ID
const UPI_ID = "YOURUPI@upi";

// Selected Plan
function buyPlan(plan){

    document.getElementById("plan").value = plan;

    document.querySelector(".payment").scrollIntoView({
        behavior:"smooth"
    });

}

// Order Form

const form = document.getElementById("orderForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();

let phone=document.getElementById("phone").value.trim();

let plan=document.getElementById("plan").value.trim();

if(name==""){

alert("Enter Name");

return;

}

if(phone==""){

alert("Enter Mobile Number");

return;

}

if(plan==""){

alert("Please Select Plan");

return;

}

let message=

`🔥 Gujarati Trader Premium

Name : ${name}

Mobile : ${phone}

Plan : ${plan}

Payment : Completed

Please Verify My Membership.`;

let url="https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(message);

window.open(url,"_blank");

});

}

// Counter Animation

const counters=document.querySelectorAll(".counter h2");

counters.forEach(counter=>{

let update=()=>{

let target=parseInt(counter.innerText);

let count=parseInt(counter.getAttribute("data-count"))||0;

let speed=target/60;

if(count<target){

count+=speed;

counter.innerText=Math.floor(count);

counter.setAttribute("data-count",count);

setTimeout(update,20);

}else{

counter.innerText=target+

(counter.innerText.includes("%")?"%":"+");

}

}

update();

});

// Card Animation

const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

let top=card.getBoundingClientRect().top;

if(top<window.innerHeight-80){

card.classList.add("show");

}

});

});

// Sticky Header

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>60){

header.style.background="#000";

}else{

header.style.background="rgba(0,0,0,.45)";

}

});

// Gold Button Glow

setInterval(()=>{

document.querySelectorAll(".gold-btn").forEach(btn=>{

btn.classList.toggle("pulse");

});

},1200);

// Current Year Footer

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}
