var typeNhaDan = document.querySelector('#nha-dan');
var typeCongTy = document.querySelector('#cong-ty');
var soKetNoi = document.querySelector('#ket-noi');
var soKenh = document.querySelector('#kenh-cao-cap')
var resultBt4 = document.querySelector('.result-cap');

function handleTienCap() {

    var phiHoaDon = 0;
    var phiCoBan = 0;
    var phiKenh = 0;

    if (typeNhaDan.checked) {
        if (soKenh.value < 0) {
            soKenh.value = 0;
        }

        phiHoaDon = 4.5;
        phiCoBan = 20.5;
        phiKenh = 7.5 * +soKenh.value;
    }

    if (typeCongTy.checked) {
        if (soKenh.value < 0 || soKetNoi.value < 10) {
            soKenh.value = 0;
            soKetNoi.value = 10;
        }

        phiHoaDon = 15;
        phiCoBan = 75 + 5 * (+soKetNoi.value - 10);
        phiKenh = 50 * +soKenh.value;
    }

    resultBt4.value = phiHoaDon + phiCoBan + phiKenh + '$';
}

function handleKhachHang() {
    if (typeNhaDan.checked) {
        soKetNoi.value = '';
        soKenh.value = '';
        resultBt4.value = '';
        soKetNoi.disabled = true;
    }
    if (typeCongTy.checked) {
        soKetNoi.value = '';
        soKenh.value = '';
        resultBt4.value = '';
        soKetNoi.disabled = false;
    }

}