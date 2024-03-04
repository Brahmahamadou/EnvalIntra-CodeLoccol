const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['JAN', 'FEV', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUL', 'AOUT', 'SEPT', 'OCT', 'NOV', 'DEC'],
    datasets: [{
      label: '# of Votes,',
      data:[10, 7.5, 11, 6, 7, 4, 8, 10, 10, 10, 10, 10],
      backgroundColor:'white',
      borderWidth: 1
    }]
  },
  options: {
    maintainAspectRatio:false,
    plugins: {
      legend:{
        display: false,
      },
      
    },
    hoverBackgroundColor:'#4A96A6',
    scales: {
      y: {
        beginAtZero: true,
        display: false,
        label: false
      },
      x: {
        grid: {
          color:'white'
        }
      }
    }
  }
});