// Gerar chart de ping
function generatePingChart() {
    // Dados de exemplo para o gráfico de ping
    const pingData = {
        labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30'],
        datasets: [{
            label: 'Ping',
            data: [40, 60, 55, 70, 65, 75, 60],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    // Configurações do gráfico de ping
    const pingConfig = {
        type: 'line',
        data: pingData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Cria o gráfico de ping
    new Chart(
        document.getElementById('ping-chart'),
        pingConfig
    );
}


// Gerar chart de CPU %
function generateCpuChart() {
    // Dados de exemplo para o gráfico de CPU %
    const cpuData = {
        labels: ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30'],
        datasets: [{
            label: 'CPU %',
            data: [40, 60, 55, 70, 65, 75, 60],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }]
    };

    // Configurações do gráfico de CPU %
    const cpuConfig = {
        type: 'line',
        data: cpuData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    };

    // Cria o gráfico de CPU %
    new Chart(
        document.getElementById('cpu-chart'),
        cpuConfig
    );
}


// Chamada das funções
generatePingChart();
generateCpuChart();