//circle chart
var xValues = ["Direct", "Referral", "Social"/*, "USA", "Argentina"*/];
var yValues = [65, 30, 40/*, 24, 15*/];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  /*"#e8c3b9",
  "#1e7145"*/
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});

//line chart
var xValues = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

new Chart("Chart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: { display: false }
  }
});
let componenet = document.getElementById("componenet")
let compolist = document.getElementById('compolist')
let utiliti = document.getElementById('utiliti')
let utilist = document.getElementById('utilist')
let page = document.getElementById('page')
let pagelist = document.getElementById('pagelist')
let hamburger = document.getElementById('hamburger')
let menu = document.getElementById('menu')
let clos = document.getElementById('clos')
let search = document.getElementById('search')
let searchbox = document.getElementById('searchbox')
let closbox = document.getElementById('closbox')
let bell = document.getElementById('bell')
let notifica = document.getElementById('notifica')
let message = document.getElementById('message')
let messagelist = document.getElementById('messagelist')
let para = document.querySelectorAll('#messagelist p')
let paragraph = document.querySelectorAll('#notifica p')
let body = document.querySelector('body')
let pro = document.getElementById('pro')
let prolist = document.getElementById('prolist')
let linemenu = document.getElementById('line-menu')
let linelist = document.getElementById('line-list')
let circlemenu = document.getElementById('circle-menu')
let circlelist = document.getElementById('circle-list')


componenet.addEventListener('click', () => {
  compolist.classList.toggle("block")
  utilist.classList.remove('block')
  pagelist.classList.remove('block')
})
utiliti.addEventListener('click', () => {
  utilist.classList.toggle("block")
  compolist.classList.remove('block')
  pagelist.classList.remove('block')
})
page.addEventListener('click', () => {
  pagelist.classList.toggle("block")
  compolist.classList.remove('block')
  utilist.classList.remove('block')

})
hamburger.addEventListener('click', () => {
  menu.classList.remove('d-none')
  menu.classList.add('d-block', 'col-4',)
})
clos.addEventListener('click', () => {
  menu.classList.remove('d-block', 'col-4',)
  menu.classList.add('d-none')
})
search.addEventListener('click', () => {
  searchbox.classList.remove("d-none")
  searchbox.classList.add("position-absolute", "col-10", "bg-white", "col-sm-9")
  searchbox.style.top = '85px'
  searchbox.style.padding = '8px'
  document.querySelector("input").style.width = "75%"
})
closbox.addEventListener("click", () => {
  searchbox.classList.add("d-none")
})
bell.addEventListener('click', () => {
  notifica.classList.toggle("block")
  var y = window.matchMedia("(max-width:700px)")
  for (let i = 0; i < paragraph.length; i++) {
    if (y.matches) {
      paragraph[i].innerHTML = paragraph[i].innerHTML.substring(0, 17) + "..."
    }
  }
  messagelist.classList.remove('d-block')

})
message.addEventListener('click', () => {
  var x = window.matchMedia("(max-width:700px)")
  messagelist.classList.toggle("block")
  for (let i = 0; i < para.length; i++) {
    if (x.matches) {
      para[i].innerHTML = para[i].innerHTML.substring(0, 12) + "..."
    }

  }
    notifica.classList.remove('d-block')

})
pro.addEventListener('click', () => {
  prolist.classList.toggle("block")
  let z=window.matchMedia("(max-width:1000px)")
  if (z.matches) {
    prolist.classList.add("position-absolute")
    prolist.classList.add("end-0")
    let text= document.querySelectorAll("#prolist h4")
    for (let i = 0; i < text.length; i++) {
      text[i].classList.add("fs-6")
      
    }
  }
})
linemenu.addEventListener('click', () => {
  linelist.classList.toggle("block")
    var b = window.matchMedia("(max-width:1000px)")
  if (b.matches) {
    linelist.classList.add("col-3")
  }
})
circlemenu.addEventListener('click', () => {
  circlelist.classList.toggle("block")
    var t = window.matchMedia("(max-width:1000px)")
  if (t.matches) {
    circlelist.classList.add("col-3")
  }
})
