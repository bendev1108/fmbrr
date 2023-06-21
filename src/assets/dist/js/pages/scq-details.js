function loadTableDetail() {
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
        trHTML += '<td><button class="btn" onclick="showFormDetailEdit(' + object['id'] + ')"><i class="fa-solid fa-pen-to-square" style="color: #005eff;"></i></button>';
        trHTML += '<button class="btn" onclick="DetailFormDelete(' + object['id'] + ')"><i class="fa-solid fa-trash" style="color: #ff0000;"></i></button></td>';
        trHTML += '</tr>';
      }
      document.getElementById("DetailScq").innerHTML = trHTML;
    }
  }
}

// loadTable();

function showFormCreateBox() {
  Swal.fire({
    title: '<p>แบบฟอร์มการจัดกลุ่มคิวอ้อย</p>',
    html:
      '<form class="was-validated">' +
      '<div class="input-group mb-3">' +
      '<select class="form-select" aria-label="Default select example">' +
      '<option selected>--กลุ่ม--</option><option value="1">1</option><option value="2">2</option><option value="3">3</option>' +
      '<option value="4">4</option><option value="5">5</option><option value="6">6</option>' +
      '<option value="7">7</option>' +
      '</select>' +
      '</div>' +
    '</form>',
    focusConfirm: false,
    preConfirm: () => {
      FormCreate();
    }
  })
}

function DetailFormDelete() {
  const fname = document.getElementById("กิจกรรมเพิ่มผลผลิต").value;
  const lname = document.getElementById("วางแผนที่จะทำ").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://www.melivecode.com/api/users/create");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "fname": fname, "lname": lname
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      swal.fire(objects['message']);
      loadTableDetail();
    }
  }
}
function showFormDetailEdit(id) {
  console.log(id);
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://www.melivecode.com/api/users/" + id);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      const user = objects['user'];
      Swal.fire({
        title: 'Multiple inputs',
        html:
        '<form class="was-validated">' +
        '<div class="input-group mb-3">' +
        '<select class="form-select" aria-label="Default select example">' +
        '<option selected>--กลุ่ม--</option><option value="1">1</option><option value="2">2</option><option value="3">3</option>' +
        '<option value="4">4</option><option value="5">5</option><option value="6">6</option>' +
        '<option value="7">7</option>' +
        '</select>' +
        '</div>' +
      '</form>',
        focusConfirm: false,
        preConfirm: () => {
          DetailFormEdit();

        }
      })
    }
  }
}
function DetailFormEdit() {
  const id = document.getElementById("id").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const xhttp = new XMLHttpRequest();
  xhttp.open("PUT", "https://www.melivecode.com/api/users/update");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(JSON.stringify({
    "id": id, "fname": fname, "lname": lname
  }));
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      swal.fire(objects['message']);
      loadTableDetail();
    }
  }
}
function DetailFormDelete(id) {
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
      loadTableDetail();
    }
  };
}
