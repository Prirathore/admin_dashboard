

// Chart.js configuration for Invoices
const ctx1 = document.getElementById('invoiceChart').getContext('2d');
const invoiceChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: 'This week',
            data: [10000, 12000, 7500, 15000, 9000, 8000, 7500],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4
        }, {
            label: 'Last week',
            data: [9000, 7000, 9500, 10000, 8500, 12000, 6000],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.4
        }]
    }
});

// Chart.js configuration for Sales Forecast
const ctx2 = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
            label: 'Weighted',
            data: [15000, 20000, 25000, 30000, 20000, 25000, 10000],
            backgroundColor: 'rgb(54, 162, 235)',
        }, {
            label: 'Won',
            data: [12000, 18000, 23000, 27000, 19000, 24000, 9000],
            backgroundColor: 'rgb(255, 206, 86)',
        }]
    }
});