document.addEventListener('DOMContentLoaded', function () {
    const { createGaugeChartConfig } = require('./chartLogic');

    const ctx1 = document.getElementById('temperatureChart1').getContext('2d');
    const ctx2 = document.getElementById('temperatureChart2').getContext('2d');
    const ctx3 = document.getElementById('temperatureChart3').getContext('2d');

    new Chart(ctx1, createGaugeChartConfig(15));
    new Chart(ctx2, createGaugeChartConfig(22));
    new Chart(ctx3, createGaugeChartConfig(28));
});
