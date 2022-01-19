const ctx = document.getElementById('myChart').getContext("2d");
let delayed;

//Gradient Fill
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(58, 123, 213, 1)');
gradient.addColorStop(1, 'rgba(0, 210, 255, 0.3)');

const labels = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
];

const data = {
    labels,
    datasets: [
        {
        data: [111, 231, 1200, 326, 122, 300, 0, 700, 1110, 415], //these are the points on the graph
        label: "Minecraft Sales",
        fill: true,
        backgroundColor: gradient,
        borderColor: "white",
        pointBackgroundColor: "darkblue",
        tension: 0.4,
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {
        radius: 3,
        hitRadius: 30,
        hoverRadius: 12,
        responsive: true,
        scales: {
            y: {
                ticks: {
                    callback: function(value) {
                        return '$' + value + 'm';
                    },
                },
            },
        },
    },
};

const myChart = new Chart(ctx, config);