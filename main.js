let name; 
do {
    name = prompt("Hãy nhập tên của bạn");
    if (!name) {
        name = prompt("Quên nhập tên kìa, nhập lại đi!");
    }
}
while (!name)
    let time = new Date();
    let hour = time.getHours();

    let a;

    if (hour < 12) {
        a = `Good morning, ${name}!`;
    } 
    else if (hour < 18) {
        a = `Good afternoon, ${name}`;
    } 
    else {
        a = `Good evening, ${name}!`;
    }    
    document.body.innerHTML = `<h1>${a}</h1>`;

