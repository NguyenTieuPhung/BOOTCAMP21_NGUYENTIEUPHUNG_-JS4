function handleThue() {
    var tongTN = document.querySelector('.tong-tn');
    var ngPT = document.querySelector('.ng-pt');
    var thuNhapSauThue = document.querySelector('.result-thue');

    var valTongTN = +tongTN.value;
    var valNgPT = +ngPT.value;
    var thueXuat = 0;

    if (valTongTN < 60000000) {
        thueXuat = valTongTN * 0.05;
    } else if (valTongTN <= 120000000) {
        thueXuat = valTongTN * 0.1;
    } else if (valTongTN <= 210000000) {
        thueXuat = valTongTN * 0.15;
    } else if (valTongTN <= 384000000) {
        thueXuat = valTongTN * 0.2;
    } else if (valTongTN <= 624000000) {
        thueXuat = valTongTN * 0.25;
    } else if (valTongTN <= 960000000) {
        thueXuat = valTongTN * 0.3;
    } else if (valTongTN > 960000000) {
        thueXuat = valTongTN * 0.35;
    }

    var valThuNhap = valTongTN - thueXuat - valNgPT * 1600000;
    thuNhapSauThue.value = valThuNhap.toLocaleString() + ' VND';
}