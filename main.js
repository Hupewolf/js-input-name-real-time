let name = prompt("Hãy nhập tên của bạn");
let now = new Date();
let hour = now.getHours();


let message;

if (hour < 12) {
    message = `Good morning, ${name}`;
} 
else if (hour < 18) {
    message = `Good afternoon, ${name}`;
} 
else {
    message = `Good evening, ${name}`;
}    
document.body.innerHTML = `<h1>${message}</h1>`;

