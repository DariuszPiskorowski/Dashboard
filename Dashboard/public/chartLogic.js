function createGaugeChartConfig(temperature) {
    return {
        type: 'doughnut',
        data: {
            labels: ['Temperature', temperature],
            datasets: [{
                data: [temperature, 100 - temperature], // Updated for simplicity
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(0, 0, 0, 0.1)' // Color of the background
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(0, 0, 0, 0)' // Border color of the background
                ],
                borderWidth: 1
            }]
        },
        options: {
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            cutoutPercentage: 80,
            tooltips: { enabled: false },
            hover: { mode: null },
            maintainAspectRatio: false,
            responsive: true,
            aspectRatio: 1,
            legend: {
                display: false
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };
}

module.exports = { createGaugeChartConfig };
