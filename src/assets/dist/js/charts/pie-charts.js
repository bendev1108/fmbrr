//Pie Charts > Simple Pie
var options = {
  series: [44, 55, 13],
  chart: {
  width: 500,
  type: 'pie',
},
labels: ['ดำเนินการแล้ว', 'ยังไม่ดำเนินการ', 'อยู่ระหว่างดำเนินการ'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#SimplePie"), options);
chart.render();
