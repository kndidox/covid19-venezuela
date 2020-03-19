//Total Cases
let x_dates = [
  '13-03-2020','14-03-2020','15-03-2020','16-03-2020', '17-03-2020','18-03-2020']

var trace = {
  x: x_dates,
  y: [2,10,17,33,36,36],
  mode: 'lines+markers',
  type: 'scatter'
};
var data = [trace];
Plotly.newPlot('graph01', data);

//Total Cases by day
var trace_02 = {
  x: x_dates,
  y: [2,8,7,16,3,0],
  mode: 'lines+markers',
  type: 'scatter'
};
var data_02 = [trace_02];
Plotly.newPlot('graph02', data_02);

//Total Cases by State
var state_apure = {
  x: x_dates,
  y: [0,1,1,1,1,1],
  mode: 'lines+markers',
  type: 'scatter',
  name: 'Apure'
};
var state_anzoategui = {
  x: x_dates,
  y: [0,0,0,2,2,2],
  mode: 'lines+markers',
  type: 'scatter',
  name: 'Anzoategui'
};
var state_aragua = {
  x: x_dates,
  y: [0,1,1,2,2,2],
  mode: 'lines+markers',
  type: 'scatter',
  name: 'Aragua'
};
var state_caracas = {
  x: x_dates,
  y: [0,0,0,5,5,5],
  mode: 'lines+markers',
  type: 'scatter',
  name: 'Caracas'
};
var state_cojedes = {
  x: x_dates,
  y: [0,1,1,1,1,1],
  mode: 'lines+markers',
  type: 'scatter',
  name: 'Cojedes'
};
var state_guaira = {
  x: x_dates,
  y: [0,0,0,5,5,5],
  mode: 'lines+markers',
  type: 'scatter',
  name: 'La Guaira'
};
var state_merida = {
  x: x_dates,
  y: [0,0,0,1,1,1],
  mode: 'lines+markers',
  type: 'scatter',
  name: 'Merida'
};
var state_miranda = {
  x: x_dates,
  y: [2,6,11,13,19,19],
  mode: 'lines+markers',
  type: 'scatter',
  name: 'Miranda'
};
var state_unknown = {
  x: x_dates,
  y: [0,0,3,0,0,0],
  mode: 'lines+markers',
  type: 'scatter',
  name: 'Unknow'
};

var data_03 = [
  state_anzoategui, 
  state_apure, 
  state_aragua, 
  state_caracas, 
  state_cojedes, 
  state_guaira, 
  state_merida, 
  state_miranda,
  state_unknown
];
Plotly.newPlot('graph03', data_03);
