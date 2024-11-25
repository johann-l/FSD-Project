function newEvent(p) {
    if ((document.getElementById(p)).textContent==""){
        return;
    }

    const dd = ((document.getElementById(p)).textContent).padStart(2, '0');
    const yyyy = document.getElementById("year").value;
    const mm = document.getElementById("month").value;
    const date = `${dd}-${mm}-${yyyy}`;

    let msg = prompt(`Date: ${date}\nEnter Event:`);
    if (msg) {
        const eventList = document.getElementById("myUL");
        const li = document.createElement("li");
        li.textContent = `Date: ${date} - Event: ${msg}`;
        eventList.appendChild(li);
    }
}
