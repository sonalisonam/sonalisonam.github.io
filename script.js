document.getElementById("inputForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get input values
  const clusterStatus = document.getElementById("clusterStatus").value;
  const date = document.getElementById("date").value;
  const duration = parseInt(document.getElementById("duration").value);

  // Do something with the input data (you can send it to a server or store it locally)

  // For demonstration purposes, let's just log the data to console
  console.log("Cluster Status:", clusterStatus);
  console.log("Date:", date);
  console.log("Duration:", duration);

  // Clear form fields after submission (optional)
  document.getElementById("clusterStatus").value = "good"; // Reset dropdown
  document.getElementById("date").value = ""; // Clear date input
  document.getElementById("duration").value = ""; // Clear duration input
});
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
