function isLeapYear (year){
    if( (year % 400 == 0) || (year % 100 != 0) && (year % 4 ==0) ){
        return true;
    }
    else{
        return false;
    }
}
const checkLeapYear = isLeapYear(1700);
const checkLeapYear1 = isLeapYear(2000);
const checkLeapYear2 = isLeapYear(2004);
const checkLeapYear3 = isLeapYear(2024);
console.log(checkLeapYear);
console.log(checkLeapYear1);
console.log(checkLeapYear2);
console.log(checkLeapYear3);