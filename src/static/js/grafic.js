
// Varsta buttons ids
const id_varsta1 = "Sub 25 ani"
const id_varsta2 = "25 - 29 ani"
const id_varsta3 = "30 - 39 ani"
const id_varsta4 = "40 - 49 ani"
const id_varsta5 ="50 - 55 ani"
const id_varsta6 = "peste 55 ani"

// Educatie buttons ids
const id_educatie1 = "fara studii"
const id_educatie2 = "invatamant primar "
const id_educatie3 = "invatamant gimnazial "
const id_educatie4 = "invatamant liceal"
const id_educatie5 = "invatamant posticeal"
const id_educatie6 = "invatamant profesional/arte si meserii"
const id_educatie7 = "invatamant universitar"
const id_educatie8 = "Total someri, din care: "

// Mediu buttons ids
const id_mediu1 = "NUMAR TOTAL SOMERI "
const id_mediu2 = "NUMAR TOTAL SOMERI DIN MEDIUL URBAN "
const id_mediu3 = "NUMAR SOMERI FEMEI DIN MEDIUL URBAN "
const id_mediu4 = "NUMAR SOMERI BARBATI DIN MEDIUL URBAN "
const id_mediu5 = "NUMAR TOTAL SOMERI DIN MEDIUL RURAL "
const id_mediu6 = "NUMAR SOMERI FEMEI DIN MEDIUL RURAL "
const id_mediu7 = "NUMAR SOMERI BARBATI DIN MEDIUL RURAL "
const id_mediu8 = "NUMAR TOTAL SOMERI FEMEI  "
const id_mediu9 = "NUMAR TOTAL SOMERI BARBATI "

// Tip buttons ids
const id_tip1 = "Numar total someri "
const id_tip2 = "Numar total someri femei  "
const id_tip3 = "Numar total someri barbati  "
const id_tip4 = "Numar  someri indemnizati  "
const id_tip5 = "Numar someri neindemnizati "
const id_tip6 = "Rata somajului (%)  "
const id_tip7 = "Rata somajului Feminina (%)  "
const id_tip8 = "Rata somajului Masculina (%)  "

// Tip buttons 
var tip1 = document.getElementById(id_tip1);
var tip2 = document.getElementById(id_tip2);
var tip3 = document.getElementById(id_tip3);
var tip4 = document.getElementById(id_tip4);
var tip5 = document.getElementById(id_tip5);
var tip6 = document.getElementById(id_tip6);
var tip7 = document.getElementById(id_tip7);
var tip8 = document.getElementById(id_tip8);

// Varsta buttons 
var varsta1 = document.getElementById(id_varsta1);
var varsta2 = document.getElementById(id_varsta2);
var varsta3 = document.getElementById(id_varsta3);
var varsta4 = document.getElementById(id_varsta4);
var varsta5 = document.getElementById(id_varsta5);
var varsta6 = document.getElementById(id_varsta6);

// Educatie buttons 
var educatie1 = document.getElementById(id_educatie1);
var educatie2 = document.getElementById(id_educatie2);
var educatie3 = document.getElementById(id_educatie3);
var educatie4 = document.getElementById(id_educatie4);
var educatie5 = document.getElementById(id_educatie5);
var educatie6 = document.getElementById(id_educatie6);
var educatie7 = document.getElementById(id_educatie7);
var educatie8 = document.getElementById(id_educatie8);

// Mediu buttons
var mediu1 = document.getElementById(id_mediu1);
var mediu2 = document.getElementById(id_mediu2);
var mediu3 = document.getElementById(id_mediu3);
var mediu4 = document.getElementById(id_mediu4);
var mediu5 = document.getElementById(id_mediu5);
var mediu6 = document.getElementById(id_mediu6);
var mediu7 = document.getElementById(id_mediu7);
var mediu8 = document.getElementById(id_mediu8);
var mediu9 = document.getElementById(id_mediu9);

//Legend text 
var legend1 = document.getElementById("legend1");
var legend2 = document.getElementById("legend2");
var legend3 = document.getElementById("legend3");
var legend4 = document.getElementById("legend4");
var legend5 = document.getElementById("legend5");
var legend6 = document.getElementById("legend6");

// Colors code for map coloring
// var colors = ['#b9b9b9', '#ffa6a9','#cc6674', '#992038','#60000e', '#1a0105']
var colors = ['#75e6de', '#7b9cd9','#77aa3d', '#fcd45b','#f2b31f', '#b72121']

// slide range
const rangeInput = document.querySelectorAll("input");

// Varsta submenu buttons
varsta1.addEventListener("click", function() {colourCountries(id_varsta1, rangeInput[0].value, rangeInput[1].value ,  "/varsta");});
varsta2.addEventListener("click", function() {colourCountries(id_varsta2, rangeInput[0].value, rangeInput[1].value ,  "/varsta");});
varsta3.addEventListener("click", function() {colourCountries(id_varsta3, rangeInput[0].value, rangeInput[1].value ,  "/varsta");});
varsta4.addEventListener("click", function() {colourCountries(id_varsta4, rangeInput[0].value, rangeInput[1].value ,  "/varsta");});
varsta5.addEventListener("click", function() {colourCountries(id_varsta5, rangeInput[0].value, rangeInput[1].value ,  "/varsta");});
varsta6.addEventListener("click", function() {colourCountries(id_varsta6, rangeInput[0].value, rangeInput[1].value ,  "/varsta");});

// Educatie submenu buttons
educatie1.addEventListener("click", function() {colourCountries(id_educatie1, rangeInput[0].value, rangeInput[1].value ,  "/educatie");});
educatie2.addEventListener("click", function() {colourCountries(id_educatie2, rangeInput[0].value, rangeInput[1].value ,  "/educatie");});
educatie3.addEventListener("click", function() {colourCountries(id_educatie3, rangeInput[0].value, rangeInput[1].value ,  "/educatie");});
educatie4.addEventListener("click", function() {colourCountries(id_educatie4, rangeInput[0].value, rangeInput[1].value ,  "/educatie");});
educatie5.addEventListener("click", function() {colourCountries(id_educatie5, rangeInput[0].value, rangeInput[1].value ,  "/educatie");});
educatie6.addEventListener("click", function() {colourCountries(id_educatie6, rangeInput[0].value, rangeInput[1].value ,  "/educatie");});
educatie7.addEventListener("click", function() {colourCountries(id_educatie7, rangeInput[0].value, rangeInput[1].value ,  "/educatie");});
educatie8.addEventListener("click", function() {colourCountries(id_educatie8, rangeInput[0].value, rangeInput[1].value ,  "/educatie");});

// Mediu submenu buttons
mediu1.addEventListener("click", function() {colourCountries(id_mediu1, rangeInput[0].value, rangeInput[1].value ,  "/mediu");});
mediu2.addEventListener("click", function() {colourCountries(id_mediu2, rangeInput[0].value, rangeInput[1].value ,  "/mediu");});
mediu3.addEventListener("click", function() {colourCountries(id_mediu3, rangeInput[0].value, rangeInput[1].value ,  "/mediu");});
mediu4.addEventListener("click", function() {colourCountries(id_mediu4, rangeInput[0].value, rangeInput[1].value ,  "/mediu");});
mediu5.addEventListener("click", function() {colourCountries(id_mediu5, rangeInput[0].value, rangeInput[1].value ,  "/mediu");});
mediu6.addEventListener("click", function() {colourCountries(id_mediu6, rangeInput[0].value, rangeInput[1].value ,  "/mediu");});
mediu7.addEventListener("click", function() {colourCountries(id_mediu7, rangeInput[0].value, rangeInput[1].value ,  "/mediu");});
mediu8.addEventListener("click", function() {colourCountries(id_mediu8, rangeInput[0].value, rangeInput[1].value ,  "/mediu");});
mediu9.addEventListener("click", function() {colourCountries(id_mediu9, rangeInput[0].value, rangeInput[1].value ,  "/mediu");});

// Tip submenu buttons
tip1.addEventListener("click", function() {colourCountries(id_tip1, rangeInput[0].value, rangeInput[1].value ,  "/tip");});
tip2.addEventListener("click", function() {colourCountries(id_tip2, rangeInput[0].value, rangeInput[1].value ,  "/tip");});
tip3.addEventListener("click", function() {colourCountries(id_tip3, rangeInput[0].value, rangeInput[1].value ,  "/tip");});
tip4.addEventListener("click", function() {colourCountries(id_tip4, rangeInput[0].value, rangeInput[1].value ,  "/tip");});
tip5.addEventListener("click", function() {colourCountries(id_tip5, rangeInput[0].value, rangeInput[1].value ,  "/tip");});
tip6.addEventListener("click", function() {colourCountries(id_tip6, rangeInput[0].value, rangeInput[1].value ,  "/tip");});
tip7.addEventListener("click", function() {colourCountries(id_tip7, rangeInput[0].value, rangeInput[1].value ,  "/tip");});
tip8.addEventListener("click", function() {colourCountries(id_tip8, rangeInput[0].value, rangeInput[1].value ,  "/tip");});


var checkInput = document.getElementById('check');
var on = document.getElementsByClassName('on');
var off = document.getElementsByClassName('off');

checkInput.addEventListener("click", function(){
if (checkInput.checked == true) {
  on[0].style.color="black";
  off[0].style.color="#253b52";
} else {
 on[0].style.color="#253b52";
  off[0].style.color="black";
}
})


function getSelectedCounties(){
  const county = ['ALBA', 'ARAD', 'ARGES', 'BACAU', 'BIHOR', 'BISTRITA NASAUD', 'BOTOSANI', 'BRAILA', 'BRASOV',
  'BUZAU', 'CALARASI', 'CARAS-SEVERIN', 'CLUJ', 'CONSTANTA', 'COVASNA', 
  'DAMBOVITA', 'DOLJ', 'GALATI', 'GIURGIU', 'GORJ', 'HARGHITA', 'HUNEDOARA', 'IALOMITA', 'IASI', 'ILFOV', 
  'MARAMURES', 'MEHEDINTI', 'BUCURESTI', 'MURES', 'NEAMT', 'OLT', 'PRAHOVA', 
  'SALAJ', 'SATU MARE', 'SIBIU', 'SUCEAVA', 'TELEORMAN', 'TIMIS', 'TULCEA', 'VALCEA', 'VASLUI', 'VRANCEA']
  var selected = []
  var selector = document.getElementById("selector");
  for(var i = 0; i<42; i++){
  var option = selector.options[i];

      if (option.selected) {
          console.log(county[i]);
          selected.push(county[i])
      } 
  }
  return selected;
}

async function colourCountries(field, month_min, month_max,  url){

    await fetch(url, {
      method: 'GET',
      headers: {  
          'Content-Type': 'application/json',
      }
    
    }).then(response => {

      // Converting received data to JSON
      return response.json();
    }).then(json => {
    
      // Loop through each data
      console.log(json)
      var data = {}
      var countyUnempolyed = {}
      var countyRate = {}
      var isBaseValue = checkInput.checked
      console.log(isBaseValue)
      var counties = []
      counties = getSelectedCounties()

      if(month_min == month_max){

        for(var i = 0; i < json.length; i++) {
          var product = json[i];
            if(product['JUDET'] != 'TOTAL' && counties.includes(product['JUDET']) && product['luna'] == month_min){
              if(product[field]){  
                data[product['JUDET']] = parseInt(product[field]);
              }
              if(product['Numar total someri ']){
                countyUnempolyed[product['JUDET']] = parseInt(product['Numar total someri '])
              }
              if(product['Rata somajului (%)  ']){
                countyRate[product['JUDET']] = parseFloat(product['Rata somajului (%)  '])
              }
          } 
        }
    }else{
        for(var i = 0; i < json.length; i++) {
          var product = json[i];
            if(product['JUDET'] != 'TOTAL' && counties.includes(product['JUDET']) && product['luna'] >= month_min && product['luna'] <= month_max){
              if(product[field]){
                if(data[product['JUDET']] == null){
                  data[product['JUDET']] = parseInt(product[field]);
                }
                else{
                  data[product['JUDET']] += parseInt(product[field]);
                }
              } 
              if(product['Numar total someri ']){
                if( countyUnempolyed[product['JUDET']] == null){
                  countyUnempolyed[product['JUDET']] = parseInt(product['Numar total someri '])
                }else{
                  countyUnempolyed[product['JUDET']] += parseInt(product['Numar total someri '])
                }
              }
              if(product['Rata somajului (%)  ']){
                if(countyRate[product['JUDET']] == null){
                  countyRate[product['JUDET']] = parseFloat(product['Rata somajului (%)  '])
                }else{
                  countyRate[product['JUDET']] += parseFloat(product['Rata somajului (%)  '])
                }
              }
          }
        }
      }

      if(isBaseValue == false){
        var ratio = {}
        ratio = getRatio(data, countyUnempolyed, countyRate)
        console.log(data)
        process_data(ratio, field, false);
      }else{
        console.log(data)
        process_data(data, field, true);
      }
        
    }).catch(err => {
      console.log(err)
    })
}


function process_data(data, field, flag){
    console.log(data)
    var max = -Infinity;
    var min = Infinity;
    if(flag == false){
      for(var county in data)
        data[county] = data[county] * 100
    }
    for(var county in data){
        if(data[county] > max){
            max = data[county];
        }
        if(data[county] < min){
            min = data[county];
        }
    }

    // min = round(min)
      // max = round(max)
    var valueRange = Math.floor((max - min) / 5)
    // updateLegend(valueRange, min, field, flag)

    var colorsSelected = []
    for(var county in data){
      var colorIndex = Math.floor((data[county] - min) / valueRange);
      colorsSelected.push(colors[colorIndex])
  }

    console.log(valueRange)
    createChart(data, colorsSelected, field);
   
}


function getRatio(data, countyUnempolyed, countyRate){
    var resultRatioData = {}
    for(var countyKey in data){
      resultRatioData[countyKey] = (data[countyKey] * 100) / ((countyUnempolyed[countyKey] * 100) / countyRate[countyKey]);
    }
    console.log(data)
    console.log(countyUnempolyed)
    console.log(countyRate)
    console.log(resultRatioData)
    return resultRatioData;
  }
  

  function assignColorsToKeys(obj) {
    const colors = ['red', 'darkred', 'green', 'yellow', 'orange'];
    const keys = Object.keys(obj);
    const sortedValues = Object.values(obj).sort((a, b) => a - b);
    const valueRange = sortedValues[sortedValues.length - 1] - sortedValues[0];
    
    var colorList = [];
    
    keys.forEach((key, index) => {
      const value = obj[key];
      const normalizedValue = (value - sortedValues[0]) / valueRange;
      const colorIndex = Math.floor(normalizedValue * (colors.length - 1));
      const color = colors[colorIndex];
      colorList.push(color);
    });
    
    return colorList;
  }



var charts = {};

function chartExists(chartId) {
  return charts.hasOwnProperty(chartId);
 }

function createChart(dataBig , selectedColors, field){
  if (chartExists('myChart')){  
    const valueExist = charts['myChart'];
    valueExist.destroy()
  };
  var ctx = document.getElementById('myChart').getContext('2d');
  const datax = dataBig
  var chart = new Chart("myChart", {
    type: "pie",
    
    data: {
    labels: Object.keys(datax),
      // labels: xValues2,
      datasets: [{
      
        backgroundColor: selectedColors,
        data: Object.values(datax),
      },
          
      
  ]
    },
    
    options: {
      title: {
        display: true,
        text: field
      },
      legend: {
        position: "bottom",
        align: "left"
      }
      
    }
  });
  charts['myChart'] = chart;
  }

  /*------------------------- Range Slider -------------------------- */
    
  // double range slider start
  function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var w1 = 40;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var w2 = 40;
      var r2 = x2 + w2;
        
      if (r1 < x2 || x1 > r2) return false;
      return true;
      
  }
  
// // slider call

let minRangeValueGap = 0;
const range = document.getElementById("range_track");
const minval = document.querySelector(".minvalue");
const maxval = document.querySelector(".maxvalue");
// const rangeInput = document.querySelectorAll("input");

let minRange, maxRange, minPercentage, maxPercentage;

const minRangeFill = () => {
  range.style.left = (rangeInput[0].value / rangeInput[0].max) * 100 - 4+ "%";
};
const maxRangeFill = () => {
  range.style.right =
    100 - (rangeInput[1].value / rangeInput[1].max) * 100 + "%";
};
const MinVlaueBubbleStyle = () => {
  minPercentage = (minRange / rangeInput[0].max) * 100;
  minval.style.left = minPercentage+ "%";
  minval.style.transform = `translate(-${minPercentage / 2}%, -100%)`;
};
const MaxVlaueBubbleStyle = () => {
  maxPercentage = 100 - (maxRange / rangeInput[1].max) * 100;
  maxval.style.right = maxPercentage + "%";
  maxval.style.transform = `translate(${maxPercentage / 2}%, 100%)`;
};

const setMinValueOutput = () => {
  minRange = parseInt(rangeInput[0].value);
  minval.innerHTML = rangeInput[0].value;
};
const setMaxValueOutput = () => {
  maxRange = parseInt(rangeInput[1].value);
  maxval.innerHTML = rangeInput[1].value;
};

setMinValueOutput();
setMaxValueOutput();
minRangeFill();
maxRangeFill();
MinVlaueBubbleStyle();
MaxVlaueBubbleStyle();

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    setMinValueOutput();
    setMaxValueOutput();

    minRangeFill();
    maxRangeFill();

    MinVlaueBubbleStyle();
    MaxVlaueBubbleStyle();

    if (maxRange - minRange < minRangeValueGap) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - minRangeValueGap;
        setMinValueOutput();
        minRangeFill();
        MinVlaueBubbleStyle();
        e.target.style.zIndex = "2";
      } else {
        rangeInput[1].value = minRange + minRangeValueGap;
        e.target.style.zIndex = "2";
        setMaxValueOutput();
        maxRangeFill();
        MaxVlaueBubbleStyle();
        
      }
    }

  });
});
// double range slider end

/*--------- Download buttons ----------*/

var downloadChartJs = () => {
  html2canvas(document.getElementById("myChart"), {
    onrendered: function (canvas) {
      var img = canvas.toDataURL(); //image data of canvas
      var doc = new jsPDF('l', 'mm', [297, 210]);
      doc.addImage(img, 0, 0);
      doc.save('pie_chart.pdf');
    }
  });
 
  
}

document.getElementById("getPDF").addEventListener("click", downloadChartJs);