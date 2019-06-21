let score = 58;
let result;
if (score >= 90) {
    document.write("Kamu mendapatkan nilai A+");
} else if (score >= 80) {
    document.write("Kamu mendapatkan nilai: A")
} else if (score >= 70) {
    document.write("Kamu mendapatkan nilai: B")
} else if (score >= 60) {
    document.write("Kamu mendapatkan nilai: C")
} else if (score >= 50) {
    document.write("Kamu mendapatkan nilai: D")
} else {
    document.write("Kamu mendapatkan nilai: E")
}

document.write("<br>");
switch (true) {
    case score>=90:
        document.write("Hasil switch case kamu mendapatkan nilai A+");
        break;
    case score>=80:
        document.write("Hasil switch case kamu mendapatkan nilai A");
        break;
    case score>=70:
        document.write("Hasil switch case kamu mendapatkan nilai B");
        break;
    case score>=60:
        document.write("Hasil switch case kamu mendapatkan nilai C");
        break;
    case score>=50:
        document.write("Hasil switch case kamu mendapatkan nilai D");
        break;
    default:
        document.write("Hasil switch case kamu mendapatkan nilai E");
        break;
}
