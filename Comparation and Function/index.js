var cuaca = "tidak hujan";
var jalan = "tidak macet";
var naik;

if (jalan === "macet" && cuaca === "hujan") {
    naik = "Mobil";
    document.write(naik);
} else if (jalan == "macet" && cuaca !="hujan") {
    naik= "Motor";
    document.write(naik);
} else if (jalan != "macet" && cuaca !="hujan") {
    naik = "Kendaraan Umum";
    document.write(naik);
}
