import React, { useState } from "react";

export default function Calogic() {
    const [year, setYear] = useState(1900);
    const [month, setMonth] = useState("01");
    const [days, setDays] = useState([]);
    const [events, setEvents] = useState({});

    const [calendarDays, setCalendarDays] = useState(Array(42).fill(""));

    const handleSubmit = (e) => {
        e.preventDefault();

        const year = e.target.year.value;
        const month = e.target.month.value;

        const firstDay = new Date(`${year}-${month}-01`).getDay(); // 0-6 for Sun-Sat
        let maxDays;

        if (["01", "03", "05", "07", "08", "10", "12"].includes(month)) {
            maxDays = 31;
        } else if (month === "02") {
            maxDays = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
        } else {
            maxDays = 30;
        }

        // Generate the calendar days
        const days = Array(42).fill("");
        let day = 1;
        for (let i = firstDay; i < firstDay + maxDays; i++) {
            days[i] = day++;
        }

        setCalendarDays(days);
    };

    return {
        year,
        setYear,
        month,
        setMonth,
        days,
        events,
    };
}