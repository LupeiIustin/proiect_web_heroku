// coloane tabel varsta 
const id_varsta1 = "Sub 25 ani"
const id_varsta2 = "25 - 29 ani"
const id_varsta3 = "30 - 39 ani"
const id_varsta4 = "40 - 49 ani"
const id_varsta5 = "50 - 55 ani"
const id_varsta6 = "peste 55 ani"

const arr_varsta = [id_varsta1, id_varsta2, id_varsta3, id_varsta4, id_varsta5, id_varsta6];


// Educatie buttons ids
const id_educatie1 = "fara studii"
const id_educatie2 = "invatamant primar "
const id_educatie3 = "invatamant gimnazial "
const id_educatie4 = "invatamant liceal"
const id_educatie5 = "invatamant posticeal"
const id_educatie6 = "invatamant profesional/arte si meserii"
const id_educatie7 = "invatamant universitar"
const id_educatie8 = "Total someri, din care: "

const arr_educatie = [id_educatie1, id_educatie2, id_educatie3, id_educatie4, id_educatie5, id_educatie6, id_educatie7, id_educatie8];

// Mediu buttons ids
const id_mediu1 = "NUMAR TOTAL SOMERI "
const id_mediu2 = "NUMAR TOTAL SOMERI DIN MEDIUL URBAN "
const id_mediu3 = "NUMAR SOMERI FEMEI DIN MEDIUL URBAN  "
const id_mediu4 = "NUMAR SOMERI BARBATI DIN MEDIUL URBAN "
const id_mediu5 = "NUMAR TOTAL SOMERI DIN MEDIUL RURAL "
const id_mediu6 = "NUMAR SOMERI FEMEI DIN MEDIUL RURAL "
const id_mediu7 = "NUMAR SOMERI BARBATI DIN MEDIUL RURAL "
const id_mediu8 = "NUMAR TOTAL SOMERI FEMEI  "
const id_mediu9 = "NUMAR TOTAL SOMERI BARBATI "

const arr_mediu = [id_mediu1, id_mediu2, id_mediu3, id_mediu4, id_mediu5, id_mediu6, id_mediu7, id_mediu8, id_mediu9];

// Tip buttons ids
const id_tip1 = "Numar total someri "
const id_tip2 = "Numar total someri femei  "
const id_tip3 = "Numar total someri barbati  "
const id_tip4 = "Numar  someri indemnizati  "
const id_tip5 = "Numar someri neindemnizati "
const id_tip6 = "Rata somajului (%)  "
const id_tip7 = "Rata somajului Feminina (%)  "
const id_tip8 = "Rata somajului Masculina (%)  "

const arr_tip = [id_tip1, id_tip2, id_tip3, id_tip4, id_tip5, id_tip6, id_tip7, id_tip8];

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
var varsta = document.getElementById("button1");
var tip = document.getElementById("button2");
var educatie = document.getElementById("button3");
var mediu = document.getElementById("button4");

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
var colors = ['#b9b9b9', '#ffa6a9','#cc6674', '#992038','#60000e', '#1a0105']

var varstaFilds = [id_varsta1, id_varsta2, id_varsta3, id_varsta4, id_varsta5, id_varsta6]
var mediuFilds = [id_mediu1, id_mediu1, id_mediu1, id_mediu1, id_mediu1, id_mediu1]


// slide range
const rangeInput = document.querySelectorAll("input");

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
 
function getGraphicId(){
    if (checkInput.checked != true) {
        return "graphic1"
    } else {
        return "graphic2"
    }
 }

// Varsta buttons
varsta.addEventListener("click", function() {full(getSelectedCounties(), rangeInput[0].value, rangeInput[1].value ,  "/varsta", getGraphicId())}); 
tip.addEventListener ("click", function() { full(getSelectedCounties(), rangeInput[0].value, rangeInput[1].value ,  "/tip", getGraphicId())})
educatie.addEventListener("click", function() { full(getSelectedCounties(), rangeInput[0].value, rangeInput[1].value ,  "/educatie", getGraphicId())});
mediu.addEventListener("click", function() { full(getSelectedCounties(), rangeInput[0].value, rangeInput[1].value ,  "/mediu", getGraphicId())});

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

const values = [];
 
var charts = {};

function full (counties, month_min, month_max, url, graphicID,){
   prepare(counties, month_min, month_max, url, graphicID);
}
 
 
function prepare(counties, month_min, month_max, url, graphicID){

   fetch(url, {
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
      var data = {};
      var bigData = {};

     if(month_min == month_max){

       for(var i = 0; i < json.length; i++) {
         var product = json[i];
         data = {};
         if(product['JUDET'] != 'TOTAL' && counties.includes(product['JUDET']) && product['luna'] == month_min)
         {
           //folosteste url pentru a gasi tipul

           switch(url) {
             case '/educatie':
               for (var k = 0; k < arr_educatie.length; k++){
                 if (product[arr_educatie[k]]){ 
                   data[arr_educatie[k]] = parseInt(product[arr_educatie[k]]);
                   }
               }
               if (product[arr_educatie[0]]){
                 // console.log(data);
                 bigData[product['JUDET']] = data;
               break;
               }

             case '/varsta':
               for (var k = 0; k < arr_varsta.length; k++){
                 if (product[arr_varsta[k]]){ 
                   data[arr_varsta[k]] = parseInt(product[arr_varsta[k]]);
                   }
               }
               if (product[arr_varsta[0]]){
                 // console.log(data);
                 bigData[product['JUDET']] = data; 
               }
               break;

             case '/mediu':
               for (var k = 0; k < arr_mediu.length; k++){
                 if (product[arr_mediu[k]]){ 
                   data[arr_mediu[k]] = parseInt(product[arr_mediu[k]]);
                   }
               }
               if (product[arr_mediu[0]]){
                 // console.log(data);
                 bigData[product['JUDET']] = data;
               break;
               }

             case '/tip':
               for (var k = 0; k < arr_tip.length; k++){
                 if (product[arr_tip[k]]){ 
                   data[arr_tip[k]] = parseInt(product[arr_tip[k]]);
                   }
               }
               if (product[arr_tip[0]]){
                 bigData[product['JUDET']] = data;
               break; 
               } 
             default:
               console.log("default")
           }
         }
       }
   }else{
       for(var i = 0; i < json.length; i++) {
         var product = json[i];
         data = {};
         if(product['JUDET'] != 'TOTAL' && counties.includes(product['JUDET']) && product['luna'] >= month_min && product['luna'] <= month_max ){
           switch(url) {
             case '/educatie':
               for (var k = 0; k < arr_educatie.length; k++){
                 if (product[arr_educatie[k]]){ 
                   if(data[arr_educatie[k]] == null){
                     data[arr_educatie[k]] = parseInt(product[arr_educatie[k]]);
                   }
                   else{
                     data[arr_educatie[k]] += parseInt(product[arr_educatie[k]]);
                   }
                 }
               }
               
               for(var l = 0; l < arr_educatie.length; l++){
                 if (product[arr_educatie[l]]){
                   if(bigData[product['JUDET']] == null){
                     bigData[product['JUDET']]= {};
                   }

                   if(bigData[product['JUDET']][arr_educatie[l]] == null){
                     bigData[product['JUDET']][arr_educatie[l]] = data[arr_educatie[l]];
                   }
                   else{
                     bigData[product['JUDET']][arr_educatie[l]] += data[arr_educatie[l]];
                   }
                 }
             }
               break;

             case '/varsta':

               for (var k = 0; k < arr_varsta.length; k++){
                 if (product[arr_varsta[k]]){ 
                   if(data[arr_varsta[k]] == null){
                     data[arr_varsta[k]] = parseInt(product[arr_varsta[k]]);
                   }
                   else{
                     data[arr_varsta[k]] += parseInt(product[arr_varsta[k]]);
                   }
                 }
               }
               
               for(var l = 0; l < arr_varsta.length; l++){
                 if (product[arr_varsta[l]]){
                   if(bigData[product['JUDET']] == null){
                     bigData[product['JUDET']]= {};
                   }

                   if(bigData[product['JUDET']][arr_varsta[l]] == null){
                     bigData[product['JUDET']][arr_varsta[l]] = data[arr_varsta[l]];
                   }
                   else{
                     bigData[product['JUDET']][arr_varsta[l]] += data[arr_varsta[l]];
                   }
                 }
             }
             break;
             case '/mediu':
                 for (var k = 0; k < arr_mediu.length; k++){
                   if (product[arr_mediu[k]]){ 
                     if(data[arr_mediu[k]] == null){
                       data[arr_mediu[k]] = parseInt(product[arr_mediu[k]]);
                     }
                     else{
                       data[arr_mediu[k]] += parseInt(product[arr_mediu[k]]);
                     }
                   }
                 }
                 
                 for(var l = 0; l < arr_mediu.length; l++){
                   if (product[arr_mediu[l]]){
                     if(bigData[product['JUDET']] == null){
                       bigData[product['JUDET']]= {};
                     }

                     if(bigData[product['JUDET']][arr_mediu[l]] == null){
                       bigData[product['JUDET']][arr_mediu[l]] = data[arr_mediu[l]];
                     }
                     else{
                       bigData[product['JUDET']][arr_mediu[l]] += data[arr_mediu[l]];
                     }
                   }
               }
               break;

             case '/tip':
               for (var k = 0; k < arr_tip.length; k++){
                 if (product[arr_tip[k]]){ 
                   if(data[arr_tip[k]] == null){
                     data[arr_tip[k]] = parseInt(product[arr_tip[k]]);
                   }
                   else{
                     data[arr_tip[k]] += parseInt(product[arr_tip[k]]);
                   }
                 }
               }
               
               for(var l = 0; l < arr_tip.length; l++){
                 if (product[arr_tip[l]]){
                   if(bigData[product['JUDET']] == null){
                     bigData[product['JUDET']]= {};
                   }

                   if(bigData[product['JUDET']][arr_tip[l]] == null){
                     bigData[product['JUDET']][arr_tip[l]] = data[arr_tip[l]];
                   }
                   else{
                     bigData[product['JUDET']][arr_tip[l]] += data[arr_tip[l]];
                   }
                 }
             }
             break;
             default:
               console.log("default")
           }
               // if(data[product['JUDET']] == null){
               //   data[product['JUDET']] = parseInt(product[field]); //TO DO creeaza o lista pentri fields prin care sa iterezi si adauga in data 
               // }
               // else{
               //   data[product['JUDET']] += parseInt(product[field]);
               // }
             } 
         }
       
        }



    console.log("datele tale:")
    console.log(bigData)
    createChart(graphicID, bigData, counties);
       
   }).catch(err => {
     console.log(err)
   })
}


function createChart(chartId, bigData, counties){
 if (chartExists(chartId)){
   const valueExist = charts[chartId];
   valueExist.destroy()
 };

 var ctx = document.getElementById(chartId).getContext('2d');
 var chart = new Chart(ctx, {
     type: 'bar',
     data: {
         // labels: varstaFilds,
         datasets: [
             {
                 label: counties[0],
                 data: bigData[counties[0]],
                 borderColor: 'red',
                 backgroundColor: 'red',
                 fill: false
             },
             {
               label: counties[1],
               data: bigData[counties[1]],
               borderColor: 'blue',
               backgroundColor: 'blue',

               fill: false
             },
             {
               label: counties[2],
               data: bigData[counties[2]],
               borderColor: 'green',
               backgroundColor: 'green',
               fill: false
             },
             {
               label: counties[3],
               data: bigData[counties[3]],
               borderColor: 'yellow',
               backgroundColor: 'yellow',
               fill: false
             },
             {
               label: counties[4],
               data: bigData[counties[4]],
               borderColor: 'black',
               backgroundColor: 'black',
               fill: false
             }
         ]
     },
     options: {
         // Configuration options for the line graph
     }
 });
 
 charts[chartId] = chart;
 
}

function chartExists(chartId) {
 return charts.hasOwnProperty(chartId);
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
  html2canvas(document.getElementById("graphic1"), {
    onrendered: function (canvas) {
      var img = canvas.toDataURL(); //image data of canvas
      var doc = new jsPDF('l', 'mm', [297, 210]);
      doc.addImage(img, 0, 0);
      doc.save('line_chart.pdf');
    }
  });
  html2canvas(document.getElementById("graphic2"), {
    onrendered: function (canvas) {
      var img = canvas.toDataURL(); //image data of canvas
      var doc = new jsPDF('l', 'mm', [297, 210]);
      doc.addImage(img, 0, 0);
      doc.save('line_chart.pdf');
    }
  });
  
}

document.getElementById("getPDF").addEventListener("click", downloadChartJs);