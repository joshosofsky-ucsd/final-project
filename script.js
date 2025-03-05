document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('patientForm');
    const adviceDiv = document.getElementById('advice');
    const chartCanvas = document.getElementById('surgeryChart');
    let surgeryChart; // To hold the Chart.js instance
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Gather input values
      const condition = document.getElementById('condition').value;
      const age = document.getElementById('age').value;
      const gender = document.getElementById('gender').value;
      const anesthesia = document.getElementById('anesthesia').value;
  
      // Generate advice text based on inputs
      let adviceText = `<p>Based on your selection of <strong>${condition}</strong> condition, age <strong>${age}</strong>, gender <strong>${gender}</strong>, and your preferred <strong>${anesthesia}</strong> anesthesia, we have tailored the following surgical simulation for you:</p>`;
  
      switch (condition) {
        case 'appendicitis':
          adviceText += `<p>An appendectomy typically involves a brief pre-operative fasting period and imaging assessments. Intra-operative care is managed with your chosen anesthesia, and post-operative recovery is usually rapid with minimal complications.</p>`;
          break;
        case 'cardiac':
          adviceText += `<p>Cardiac procedures require meticulous pre-operative evaluation and advanced intra-operative monitoring. Anesthesia is carefully managed to maintain cardiovascular stability, with a post-operative recovery that includes intensive care observation.</p>`;
          break;
        case 'orthopedic':
          adviceText += `<p>For orthopedic conditions, a detailed evaluation of your musculoskeletal system is conducted pre-operatively. The surgery involves precise manipulation of bones/joints, and rehabilitation is key during the post-operative phase.</p>`;
          break;
        case 'neurological':
          adviceText += `<p>Neurological surgeries are intricate, necessitating advanced imaging and detailed surgical planning. Intra-operative management includes precise anesthesia techniques, with post-operative care focusing on neurological recovery.</p>`;
          break;
        default:
          adviceText += `<p>Please select a valid condition to receive appropriate guidance.</p>`;
      }
  
      adviceDiv.innerHTML = adviceText;
  
      // Determine dummy chart data based on the selected condition
      let chartData;
      switch (condition) {
        case 'appendicitis':
          chartData = [25, 50, 25];
          break;
        case 'cardiac':
          chartData = [30, 60, 40];
          break;
        case 'orthopedic':
          chartData = [20, 40, 40];
          break;
        case 'neurological':
          chartData = [15, 50, 35];
          break;
        default:
          chartData = [0, 0, 0];
      }
  
      // If a chart already exists, destroy it before creating a new one
      if (surgeryChart) {
        surgeryChart.destroy();
      }
  
      // Create a new bar chart to represent the surgical simulation phases
  
surgeryChart = new Chart(chartCanvas, {
  type: 'bar',
  data: {
      labels: ['Pre-Operative', 'Intra-Operative', 'Post-Operative'],
      datasets: [{
          label: 'Surgery Phase Analysis',
          data: chartData,
          backgroundColor: [
              'rgba(52, 152, 219, 0.6)',
              'rgba(231, 76, 60, 0.6)',
              'rgba(46, 204, 113, 0.6)'
          ],
          borderColor: [
              'rgba(52, 152, 219, 1)',
              'rgba(231, 76, 60, 1)',
              'rgba(46, 204, 113, 1)'
          ],
          borderWidth: 2,
          borderRadius: 6
      }]
  },
  options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
          y: {
              beginAtZero: true,
              title: {
                  display: true,
                  text: 'Intensity / Impact (%)',
                  font: {
                      size: 14,
                      weight: 'bold'
                  }
              },
              grid: {
                  color: 'rgba(0, 0, 0, 0.05)'
              }
          },
          x: {
              grid: {
                  display: false
              }
          }
      },
      plugins: {
          legend: {
              display: false
          },
          tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: 12,
              titleFont: {
                  size: 14
              },
              bodyFont: {
                  size: 13
              }
          }
      },
      animation: {
          duration: 1500,
          easing: 'easeInOutQuart'
      }
  }
});
  
      // In a full implementation, you might also fetch and analyze the Korean Surgery Dataset
      // For example:
      // fetch('clinical_data_cleaned.csv')
      //   .then(response => response.text())
      //   .then(csvText => {
      //     // Parse and process CSV data here
      //   })
      //   .catch(error => console.error('Error loading CSV data:', error));
    });
  });
  