function handleTienDien() {
    var ten = document.querySelector('.chu-nha');
    var soDien = document.querySelector('.so-kw');
    var tienDien = document.querySelector('.result-tien-dien');

    var valSoDien = +soDien.value;
    var valSoDien50kW = 500 * 50;
    var valSoDien50kWKe = 650 * 50;
    var valSoDien100kWKe = 850 * 100;
    var valSoDien150kWKe = 1100 * 150;

    var valTienDien = 0;

    if (valSoDien <= 50) {
        valTienDien = 500 * valSoDien;
    } else if (valSoDien <= 100) {
        valTienDien = 650 * (valSoDien - 50) + valSoDien50kW;
    } else if (valSoDien <= 200) {
        valTienDien = 850 * (valSoDien - 100) +
            valSoDien50kWKe + valSoDien50kW;
    } else if (valSoDien <= 350) {
        valTienDien = 1100 * (valSoDien - 200) +
            valSoDien100kWKe + valSoDien50kWKe + valSoDien50kW;
    } else {
        valTienDien = 1300 * (valSoDien - 350) +
            valSoDien150kWKe + valSoDien100kWKe + valSoDien50kWKe + valSoDien50kW;
    }

    tienDien.value = valTienDien.toLocaleString() + ' VND';
}