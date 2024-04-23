// Assuming you have data about cluster status and build durations
const clusterStatus = "good"; // "good", "bad", or "issue"
const buildDurations = [
  { date: "2024-04-20", duration: 120 },
  { date: "2024-04-21", duration: 90 },
  { date: "2024-04-22", duration: 110 },
  // Add more data as needed
];

function drawGraph(startDate, endDate) {
  const graphElement = document.getElementById("graph");
  const ctx = graphElement.getContext("2d");

  // Filter build durations based on the selected date range
  const filteredBuildDurations = buildDurations.filter(data => {
    const date = new Date(data.date);
    return date >= new Date(startDate) && date <= new Date(endDate);
  });

  // Extracting dates and durations from filtered data
  const dates = filteredBuildDurations.map(data => data.date);
  const durations = filteredBuildDurations.map(data => data.duration);

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: dates,
      datasets: [{
        label: "Build Duration",
        data: durations,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Duration (in minutes)'
          }
        }
      }
    }
  });
}

// Parse query parameters to get start and end date
const urlParams = new URLSearchParams(window.location.search);
const startDate = urlParams.get('startDate');
const endDate = urlParams.get('endDate');

// Call drawGraph with the parsed dates
drawGraph(startDate, endDate);
