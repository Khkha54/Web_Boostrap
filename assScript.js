$(document).ready(function () {
   
    $(function () {
        // Dropdown toggle
        $(".dropdown-toggle").click(function () {
          $(this).next(".dropdown").slideToggle();
        });
      
        $(document).click(function (e) {
          var target = e.target;
          if (
            !$(target).is(".dropdown-toggle") &&
            !$(target).parents().is(".dropdown-toggle")
          ) {
            // { $('.dropdown').hide(); }
            // $(".dropdown").slideUp();
          }
        });
      });
      
})

var hang=[
 
  {
    id:2,
    anh:"https://product.hstatic.net/200000722513/product/viper_a4060_1f302310f8704e7ca134df72af8e460f_medium.png",
    ten:"GVN Homework R4",
    so:1,
    gia:700
  },
  {
    id:1,
    anh:"https://product.hstatic.net/200000722513/product/viper_a4060_1f302310f8704e7ca134df72af8e460f_medium.png",
    ten:"GVN Homework R3",
    so:1,
    gia:500
  },
];

function nap() {
  var onehang= document.getElementById("datarow");
  onehang.innerHTML="";
  for(var i=0;i<hang.length;i++){
    var onesp=hang[i];
    var tr=document.createElement("tr");
  onehang.appendChild(tr);
  tr.innerHTML=`
  <td scope="row"><img src="${onesp.anh}" class="img-fluid" alt=""></td>
  <td style="width: 30%;"><a href="san_pham.html" class="text-decoration-none fw-bold">${onesp.ten}</a></td>
  <td style="width: 10%;"><input type="number" value="${onesp.so}" min="0" name="" id=""
          style="width: 50%;" onchange="suaso(${i},this.value)" ></td>
  <td>${onesp.gia*onesp.so}Đ</td>
  <td><i class="fas fa-trash-alt" onclick="xoa(${i})"></i></td>
  `;
}
tongtien();
}

function suaso(i, value) {
  hang[i].so=value;
  nap();
}

function xoa(i) {
  hang.splice(i,1);
  nap();
}

function tongtien() {
  var tong=0;
  for (let index = 0; index < hang.length; index++) {
        let onesp=hang[index];
        let tonggia=onesp.gia*onesp.so;
        tong=tong+tonggia;
  }
  document.getElementById("tongtien").innerHTML=`<p class="text-decoration-none fw-bold fs-3">${tong}Đ</p>`;
}