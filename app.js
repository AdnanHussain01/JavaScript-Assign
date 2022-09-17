// Chapter 21,22,23,24,25

// Q1

// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter Last Name")
// var fullName = (firstName + lastName)
// cocument.write(fullName);

// Q2

// var phone = prompt("Enter Phone Model")
// document.write("My favourite phone is : " + phone + "<br />");
// var length = phone.length
// document.write("Length of string is : " + length);

// Q3

// var nationality = "Pakistani"
// document.write("String: " + nationality + "<br />")
// var b = nationality.indexOf("n")
// document.write("Index of 'n': " + b);

// Q4

// var a = "Hello World"
// document.write("String: " + a + "<br />")
// var b = a.lastIndexOf("l")
// document.write("Last Index of 'l': " + b);

// Q5

// var nationality = "Pakistani"
// document.write("String: " + nationality + "<br />")
// var b = nationality.charAt(3)
// document.write("Character of index 3: " + b);

// Q6

// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter Last Name")
// var fullName = firstName.concat(lastName)
// document.write(fullName);

// Q7

// var city = "Hyderabad"
// document.write("City: " + city + "<br />")
// var city2 = city.replace("Hyderabad","Islamabad")
// document.write("After Replacement: " + city2);

// Q8

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var msg = message.replace(/and/g , "&")
// document.write(msg);

// Q9

// var s = "472"
// document.write("Value: " + s + "<br /> Type: " + typeof(s) + "<br /> <br />");

// var s = "472"
// var num = parseInt(s)
// document.write("Value: " + s + "<br /> Type: " + typeof(num));

// Q10

// var user = prompt("Enter Anything")
// var user1 = user.toUpperCase()
// document.write(user1);

// Q11

// var user = prompt("Enter Anything")
// var java = user.slice(0 , 1 )
// var upper = java.toUpperCase()
// var javaa = user.slice(1)
// var upperr = javaa.toLowerCase()
// var result = upper.concat(upperr);
// document.write(result);

// Q12

// var num = 35.36
// var result = num.toString().replace("." , "")
// document.write(result);

// Q13

// var a = prompt("Enter Anything")
// for(var i = 0; i < a.length; i++){
//     var txt = a.slice(i, i + 1);
//     if (txt == "!" || txt == "," || txt == "." || txt == "@"){
//         alert("Please enter a valid username");
//     }
// }

// Q14

// var foodArray = ["cake","apple pie","cookie","chips","patties"]
// var user = prompt("Enter food")
// var user1 = user.toLowerCase()
// for(var i = 0 ; i < foodArray.length ; i++){
//     if(user1 == foodArray[i]){
//         document.write(foodArray[i] + i)
//     }
// }

// Q15



// Q16

// var uni = "Uniersity of Karachi"
// var arr = uni.split("")
// for(var i = 0 ; i < uni.length ; i++){
//     document.write(arr[i] + "<br />")
// }

// Q17

// var nationality = "Pakistan"
// var b = nationality.charAt(7);
// document.write(b);

// Q18

// var str = "The quick brown fox jumps over the lazy dog"
// var lower = str.toLowerCase()
// var count = 0
// for( var i = 0 ; i < lower.length ; i++){
//     var txt = lower.slice(i, i + 3)
//     if(txt == "the" ){
//         count++
//     }
// }
// console.log(count)


// Chapter 26,27,28,29,30

// Q1

// a.

// var user = +prompt("Enter Value")

// b.

// var num = Math.round(user)
// console.log(num);

// c.

// var num1 = Math.floor(user)
// console.log(num1);

// d.

// var num2 = Math.ceil(user)
// console.log(num2);

// Q2

// a.

// var user = +prompt("Enter Value")

// b.

// var num = Math.round(user)
// console.log(num);

// c.

// var num1 = Math.floor(user)
// console.log(num1);

// d.

// var num2 = Math.ceil(user)
// console.log(num2);

// Q3

// var user = +prompt("Enter Value")
// var num = Math.abs(user)
// console.log(num);

// Q4

// var num = Math.floor(Math.random()* 6 + 1 );
// console.log(num);

// Q5

// var num = Math.floor(Math.random()* 2 + 1 );
// if(num == 2){
//     console.log("Heads")
// }else if (num == 1){
//     console.log("Tails")
// }

// Q6

// var num = Math.floor(Math.random()* 100 + 1 );
// console.log(num);

// Q7

// var user = +prompt("Enter Your Weight")
// var weight = parseFloat(user)
// console.log(weight);

// Q8

// var secret = Math.floor(Math.random()* 10 + 1);
// console.log(secret)
// var user = +prompt("Enter Value between 1 to 10")
// if(secret == user){
//     alert("Congratulation")
// }else alert("Try Again");


// Chapter 31,32,33,34

// Q1

// var todyaDate = new Date()
// console.log(todyaDate);

// Q2

// var arr = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , " Jul" , "Aug" , " Sep" , "Oct" , "Nov" , "Dec" ]
// var todayDate = new Date()
// var month = todayDate.getMonth()
// console.log(arr[month])

// Q3

// var arr = ["Sun" , "Mon" , "Tue" , "Wed" , "Thur" , "Fri" , "Sat" ]
// var todayDate = new Date()
// var day = todayDate.getDay()
// console.log(arr[day])

// Q4

// var arr = ["Sun" , "Mon" , "Tue" , "Wed" , "Thur" , "Fri" , "Sat" ]
// var todayDate = new Date()
// var day = todayDate.getDay()
// if ( day == "Sat" || day == "Sun"){
//     console.log("Its Fun Day")
// }else {
//     console.log("Working Day")
// }

// Q5

// var todayDate = new Date()
// var day = todayDate.getDay()
// if(day < 16){
//     console.log("First Fifteen Days of the month")
// }else {
//     console.log("Last Days of the month")
// }

// Q6

// var todayDate = new Date()
// console.log(todayDate);
// var milli = todayDate.getTime()
// console.log(milli);
// var mint = milli/1000/60
// console.log(mint);

// Q7

// var todayDate = new Date()
// console.log(todayDate)
// var hour = todayDate.getHours()
// console.log(hour)
// if(hour < 12){
//     console.log("Its AM")
// }else {
//     console.log("Its PM")
// }

// Q8

// var a = new Date ()
// a.setDate(30)
// a.setHours(00)
// a.setMinutes(00)
// a.setSeconds(00)
// a.setMonth(11)
// a.setFullYear(2020)
// console.log(a)

// Q9

// var todayDate = new Date();

// var specDate = new Date ('06-18-2015')
// console.log(specDate);

// var specDateTime = specDate.getDate()
// console.log(specDateTime);

// var currenTime = todayDate.getTime()
// console.log(currenTime);

// var diff = currenTime-specDate
// console.log(diff);

// var days = diff/(1000 * 60 * 60 * 24)
// console.log(days)

// Q10

// var todayDate = new Date();

// var specDate = new Date ('12-05-2015')
// console.log(specDate);

// var currenTime = todayDate.getTime()
// console.log(currenTime);

// Q11

// var todayDate = new Date()
// console.log(todayDate)

// var dateBefore = new Date()
// dateBefore.setHours(dateBefore.getHours() - 1);
// console.log(dateBefore)

// Q12

// var todayDate = new Date()
// console.log(todayDate)

// var  yearBefore = new Date()
// yearBefore.setFullYear(yearBefore.getFullYear() - 100);
// console.log(yearBefore)

// Q13

// var todayDate = new Date()
// console.log(todayDate)
// var user = +prompt("Enter Age")
// var year = todayDate.+getFullYear()
// console.log(year)
// var birthYear = year - user
// console.log(birthYear)


// Q14

// var userName = prompt("Enter Name")
// document.write("Customer Name :" + userName + "<br />")
// var todayDate = new Date()
// console.log(todayDate)
// var arr = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , " Jul" , "Aug" , " Sep" , "Oct" , "Nov" , "Dec" ]
// var todayDate = new Date()
// var month = todayDate.getMonth()
// document.write("Month :" + arr[month] + "<br />")
// var numberOfunit = +prompt("Enter Units")
// document.write("Number of Units :" + numberOfunit + "<br />")
// var perUnit = 20
// document.write("Charges Per Unit :" + perUnit + "<br />")
// var amount =  perUnit * numberOfunit
// document.write("Net Amount Payable (within Due Date):" + amount + "<br />")
// var latePayment = 350
// document.write("late Paymewnt Surcharge :" + latePayment)
// var grossAmount = amount + latePayment
// document.write("Gross Amount Payable (after Due Date) :" +  grossAmount)


// Chapter 35,36,37,38

// Q1

// function todayDate(){
//     var newDate = new Date()
//     console.log(newDate)
// }
// todayDate()

// Q2

// function userName(firstName,lastName){
//     alert("Welcome " + firstName,lastName)
// }
// var First = prompt("Enter First Name")
// var Last = prompt("Enter Last Name")
// userName(First + Last)

// Q3

// function userName(){
//      var First = +prompt("Enter First Num")
//      var Last = +prompt("Enter Last Num")
//      var final = First + Last
//      return final
// }
// var result = userName()
// alert(result)

// Q4

// function calculator(num1,num2,opt){
//     if(operater == "+"){
//         return number1 + number2
//     }else if (operater == "-"){
//         return number1 - number2
//     }else if(operater == "*"){
//         return number1 * number2
//     }else if (operater == "/"){
//         return number1 / number2
//     }
    
// }
// var number1 = +prompt("Enter Number")
// var number2 = +prompt("Enter Number")
// var operater = prompt("Enter Operator")

// var cal = calculator(number1,number2,operater) 
// document.write(cal)

// Q5

// function squ(number){
//     var square = number * number * number
//     return square
// }
// var result = squ(2)
// document.write(result)

// Q6



// Q7

// function count(){
//     var startingpoint = +prompt("Enter Start Num")
//     var startingpoint2 = +prompt("Enter End Num")
//     for(var i = startingpoint ; i <= startingpoint2 ; i++){
//         document.write(i + "<br />")
//     }

// }
// count()

// Q8

// function outerfunction(){
//     function innerfunction(base,perpen){
//     var bass = base * base
//     var perpe = perpen * perpen
    
//     }
// Not Complete
// }

// Q9

// function area (width,height){
//     var rect = width * height
//     console.log(rect)
// }
// var v = 10
// area(40,v)

// Q10

