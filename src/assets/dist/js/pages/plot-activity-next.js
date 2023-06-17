function loadTable() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://www.melivecode.com/api/users");
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var trHTML = '';
      const objects = JSON.parse(this.responseText);
      console.log('data from api :', objects)
      for (let object of objects) {
        trHTML += '<tr>';
        trHTML += '<td>' + object['id'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td>' + object['#'] + '</td>';
        trHTML += '<td><button class="btn" onclick="showScqFormEditBox(' + object['id'] + ')"><i class="fa-solid fa-pen-to-square" style="color: #005eff;"></i></button>';
        trHTML += '<button class="btn" onclick="SqcFormDelete(' + object['id'] + ')"><i class="fa-solid fa-trash" style="color: #ff0000;"></i></button></td>';
        trHTML += '</tr>';
      }
      document.getElementById("mytable").innerHTML = trHTML;
    }
  }
}

// loadTable();

function showScqFormCreateBox() {
  Swal.fire({
    title: '<p>แบบฟอร์มการตรวจกิจกรรมแปลงผลผลิตสูง ปี 2566/67</p>',
    html:
      '<form class="was-validated">' +
      '<div class="input-group mb-3">' +
      '<select class="form-select" aria-label="Default select example">' +
      '<option selected>--กิจกรรมเพิ่มผลผลิต--</option><option value="1">การระเบิดดินดาน (ภายในอายุ 30 วัน)</option><option value="2">ปุ๋ยอินทรีย์ (ภายในอายุ 30 วัน)</option><option value="3">โดโลไมท์ (ภายในอายุ 30 วัน)</option>' +
      '<option value="4">ใส่ปุ๋ยเคมี ครั้งที่ 1 (ภายในอายุ 30 วัน)</option><option value="5">ใส่ปุ๋ยเคมี ครั้งที่ 2 (ภายในอายุ 75 วัน)</option><option value="6">การพูนโคน เพื่อรองรับรถตัดอ้อย (ระยะเวลา 75 วัน)</option>' +
      '<option value="7">ใส่ปุ๋ยเคมี ครั้งที่ 3 เพื่อเพิ่มผลผลิต (ภายในอายุ 90 วัน)</option>' +
      '</select>' +
      '</div>' +
      '<div class="input-group mb-3"><span class="input-group-text">วางแผนที่จะทำ (วันที่)</span><input type="text" class="form-control"></div>' +
      '<div class="input-group mb-3"><span class="input-group-text">วันที่ทำจริง (วันที่)</span><input type="text" class="form-control"></div>' +
      '<div class="input-group mb-3">' +
      '<select class="form-select" aria-label="Default select example">' +
      '<option selected>--ทันเวลา--</option><option value="1">ทันเวลา</option><option value="2">ไม่ทันเวลา</option>' +
      '</select>' +
      '</div>' +
      '<div class="input-group mb-3"><span class="input-group-text">คุณภาพ</span><input type="text" class="form-control"></div>' +
      '<div class="input-group mb-3"><span class="input-group-text">วิธีการทำ</span><input type="text" class="form-control"></div>' +
      '<div class="input-group mb-3"><span class="input-group-text">อื่น ๆ</span><input type="text" class="form-control"></div>' +
    '</form>',
    focusConfirm: false,
    preConfirm: () => {
      ScqCreate();
    }
  })
}
function ScqFormDelete() {
  const fname = document.getElementById("กิจกรรมเพิ่มผลผลิต").value;
  const lname = document.getElementById("วางแผนที่จะทำ").value;
  const username = document.getElementById("วันที่ทำจริง").value;
  const email = document.getElementById("ทันเวลา").value;
  const ln = document.getElementById("คุณภาพ").value;
  const us = document.getElementById("วิธีการทำ").value;
  const e = document.getElementById("อื่น ๆ").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://www.melivecode.com/api/users/create");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "fname": fname, "lname": lname, "username": username, "email": email, "ln": ln, "us": us, "e": e
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      swal.fire(objects['message']);
      loadTable();
    }
  }
}
function showSqcFormEditBox(id) {
  console.log(id);
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://www.melivecode.com/api/users/" + id);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      const user = objects['user'];
      Swal.fire({
        title: '<p>แบบฟอร์มการตรวจกิจกรรมแปลงผลผลิตสูง ปี 2566/67</p>',
        html:
        '<form class="was-validated">' +
      '<div class="input-group mb-3">' +
      '<select class="form-select" aria-label="Default select example">' +
      '<option selected>--กิจกรรมเพิ่มผลผลิต--</option><option value="1">การระเบิดดินดาน (ภายในอายุ 30 วัน)</option><option value="2">ปุ๋ยอินทรีย์ (ภายในอายุ 30 วัน)</option><option value="3">โดโลไมท์ (ภายในอายุ 30 วัน)</option>' +
      '<option value="4">ใส่ปุ๋ยเคมี ครั้งที่ 1 (ภายในอายุ 30 วัน)</option><option value="5">ใส่ปุ๋ยเคมี ครั้งที่ 2 (ภายในอายุ 75 วัน)</option><option value="6">การพูนโคน เพื่อรองรับรถตัดอ้อย (ระยะเวลา 75 วัน)</option>' +
      '<option value="7">ใส่ปุ๋ยเคมี ครั้งที่ 3 เพื่อเพิ่มผลผลิต (ภายในอายุ 90 วัน)</option>' +
      '</select>' +
      '</div>' +
      '<div class="input-group mb-3"><span class="input-group-text">วางแผนที่จะทำ (วันที่)</span><input type="text" class="form-control"></div>' +
      '<div class="input-group mb-3"><span class="input-group-text">วันที่ทำจริง (วันที่)</span><input type="text" class="form-control"></div>' +
      '<div class="input-group mb-3">' +
      '<select class="form-select" aria-label="Default select example">' +
      '<option selected>--ทันเวลา--</option><option value="1">ทันเวลา</option><option value="2">ไม่ทันเวลา</option>' +
      '</select>' +
      '</div>' +
      '<div class="input-group mb-3"><span class="input-group-text">คุณภาพ</span><input type="text" class="form-control"></div>' +
      '<div class="input-group mb-3"><span class="input-group-text">วิธีการทำ</span><input type="text" class="form-control"></div>' +
      '<div class="input-group mb-3"><span class="input-group-text">อื่น ๆ</span><input type="text" class="form-control"></div>' +
    '</form>',
        focusConfirm: false,
        preConfirm: () => {
          ScqFormEdit();

        }
      })
    }
  }
}
function ScqFormEdit() {
  const id = document.getElementById("id").value;
  const fname = document.getElementById("กิจกรรมเพิ่มผลผลิต").value;
  const lname = document.getElementById("วางแผนที่จะทำ").value;
  const username = document.getElementById("วันที่ทำจริง").value;
  const email = document.getElementById("ทันเวลา").value;
  const ln = document.getElementById("คุณภาพ").value;
  const us = document.getElementById("วิธีการทำ").value;
  const e = document.getElementById("อื่น ๆ").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("PUT", "https://www.melivecode.com/api/users/update");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "id": id, "fname": fname, "lname": lname, "username": username, "email": email, "ln": ln, "us": us, "e": e
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      swal.fire(objects['message']);
      loadTable();
    }
  }
}
function ScqFormDelete(id) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", "https://www.melivecode.com/api/users/delete");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "id": id
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      swal.fire(objects['message']);
      loadTable();
    }
  };
}
