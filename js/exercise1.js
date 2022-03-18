function handleQuanLy() {
    var diemChuan = document.querySelector('.diem-chuan');
    var mon1 = document.querySelector('.mon-1');
    var mon2 = document.querySelector('.mon-2');
    var mon3 = document.querySelector('.mon-3');
    var khuVuc = document.querySelector('.khu-vuc');
    var doiTuong = document.querySelector('.doi-tuong');
    var danhGia = document.querySelector('.result-dg');
    var tongDiem = document.querySelector('.result-td');

    var valDiemChuan = diemChuan.value;

    var diemMon1 = +mon1.value;
    var diemMon2 = +mon2.value;
    var diemMon3 = +mon3.value;

    // Tinh diem khu vuc
    var diemKhuVuc = 0;
    switch (khuVuc.value) {
        case 'A':
            diemKhuVuc = 2;
            break;
        case 'B':
            diemKhuVuc = 1;
            break;
        case 'C':
            diemKhuVuc = 0.5;
            break;
    }

    // Tinh diem doi tuong
    var diemDoiTuong = 0;
    switch (doiTuong.value) {
        case '1':
            diemDoiTuong = 2.5;
            break;
        case '2':
            diemDoiTuong = 1.5;
            break;
        case '3':
            diemDoiTuong = 1;
            break;
    }

    var diemUuTien = diemKhuVuc + diemDoiTuong;
    var diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUuTien;
    tongDiem.value = diemTongKet;

    if ((diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0)
        && (diemTongKet >= valDiemChuan)) {
            danhGia.value = 'ĐẬU';
    } else {
        danhGia.value = 'RỚT'; 
    }

} 