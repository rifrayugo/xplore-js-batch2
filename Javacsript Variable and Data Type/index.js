var string = "Hello world!!!";
document.write(string);
document.write("<br>");
var number = 25;
document.write(number);
document.write("<br>");
var objectStudent = {
    "firstName": "Rifra",
    "lastName": "Yugo",
    "major": "IT",
    "faculty": "Information Technology"
};
document.write(JSON.stringify(objectStudent));
document.write("<br>");
// will be use in ch3
// objectStudent.address="Jalan Bangka XII No.4";
// document.write(JSON.stringify(objectStudent));
document.write("<br>");
// will be use in ch3
// objectStudent["phoneNumber"] = "02199388491";
// document.write(JSON.stringify(objectStudent));
document.write("<br>");
var arrayString = ["Kucing", "Jerapah", "Zebra"];
document.write(arrayString);
document.write("<br>");
var arrayNumber = [1, 2, 3, 4];
document.write(arrayNumber);
document.write("<br>");
var booleanTrue = true;
document.write(booleanTrue);