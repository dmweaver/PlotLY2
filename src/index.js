import Plotly from "plotly.js/dist/plotly";

const Yvalue = [20, 14, 23, '','' ];
const Xvalue = ['Very Low', 'Low', 'High', 'Other', 'Other2'];
//const y=Yvalue;
//const x=Xvalue;
const trace1 = {
  x: Xvalue,
  y: Yvalue,
  marker:{
    color: ['red', 'orange', 'green', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)']
  },
  type: 'bar',
  width: 0.9,
 
  text: Yvalue.map(String),
  textposition: "outside",
  showticklabels: true
};

const data = [trace1];

const layout = {
  title: 'Phosphorus Status',
  width: 800,
  height: 600,
  font: {size: 14},
  xaxis: {linewidth: 2, showgrid: 'major'},
  yaxis: {linewidth: 2}
};

Plotly.newPlot('chart', data, layout, {displayModeBar: false});
