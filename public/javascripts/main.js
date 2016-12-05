var query = require('../db/query')

var chrt = document.getElementById("mycanvas").getContext("2d");
var myarr = [4, 5, 9,];
var data = {
    labels: ["One Year", "Three Year", "Five Year"], //x-axis
    datasets: [
        {
            label: "My First dataset", //optional
            fillColor: "rgba(220,220,220,0.8)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [1, 4, 6,] // y-axis
        },
		{
            label: "My Second dataset", //optional
            fillColor: "rgba(220,120,220,0.8)",
            strokeColor: "rgba(220,120,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: myarr
        }
    ]
};

var myFirstChart = new Chart(chrt).Bar(data);
