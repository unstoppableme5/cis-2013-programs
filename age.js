var floatAge, floatDays, floatMonths, intWeeks, intFortNights;
floatAge = prompt("Enter your Age");
floatDays = floatAge * 365.25;
floatMonths = floatAge * 12;
intWeeks = floatDays /7;
intFortNights = floatDays / 14;

alert("Your Age in years: " + floatAge +"\n"+
"Your age in days: " + floatDays +"\n"+
"Your age in Months: " + floatMonths +"\n"+
"Your age in Weeks: " + intWeeks +"\n"+
"Your age in Fort Nights: " + floatDays +"\n"
);
