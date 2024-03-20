document.addEventListener('DOMContentLoaded', function () {
    const ctx1 = document.getElementById('temperatureChart1').getContext('2d');
    const ctx2 = document.getElementById('temperatureChart2').getContext('2d');
    const ctx3 = document.getElementById('temperatureChart3').getContext('2d');

    const createGaugeChart = (context, temperature) => {
        new Chart(context, {
            type: 'doughnut',
            data: {
                labels: ['Temperature', temperature],
                datasets: [{
                    data: [temperature, temperature/180], // Correctly showing the temperature
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
                rotation: 1 * Math.PI,   // Rotates the doughnut to start at the top
                circumference: 1 * Math.PI,  // makes HALF doughnut = 180 degrees
                cutoutPercentage: 80, // Makes the doughnut thinner
                tooltips: { enabled: false },
                hover: { mode: null },
                maintainAspectRatio: false,
                responsive: true,
                aspectRatio: 1, // Ensures that the doughnut is more circular
                legend: {
                    display: false
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    };

    createGaugeChart(ctx1, 17); 
    createGaugeChart(ctx2, 20);
    createGaugeChart(ctx3, 25);
});
