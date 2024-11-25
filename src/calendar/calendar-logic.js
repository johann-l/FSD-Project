const c = document.getElementById("calendarForm");

c.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    const y = document.getElementById("year").value;
    const m = document.getElementById("month").value;
    const d = new Date(y+"-"+m+"-01").getDay(); // Sunday - Saturday : 0 - 6
    let maxdays;

    if(["01", "03", "05", "07", "08", "10", "12"].includes(m)){
        maxdays=31;
    }
    else if (m=="02"){
        if((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0){
            maxdays=29;
        }
        else{
            maxdays=28;
        }
    }
    else{
        maxdays=30;
    }
    
    let day = 1;
    for (let i = 1; i <= 42; i++) {
        const button = document.getElementById(i.toString());
        button.style.visibility='visible';
        button.textContent="";
        if (i > d && day <= maxdays) {
            button.textContent = day;
            day++;
        }
        if (button.textContent == ""){
            button.style.visibility='hidden';
        }
    }

});
