// Assuming you have data about cluster status and build durations
const clusterStatus = "good"; // "good", "bad", or "issue"
const buildDurations = [
  { date: "2024-04-20", duration: 120 },
  { date: "2024-04-21", duration: 90 },
  { date: "2024-04-22", duration: 110 },
  // Add more data as needed
];

// Function to update cluster status display
function updateStatus() {
  const statusElement = document.getElementById("status");
  let statusText = "";
  switch (clusterStatus) {
    case "good":
      statusText = "<span style='color: green;'>Cluster Status: Good</span>";
      break;
    case "bad":
      statusText = "<span style='color: red;'>Cluster Status: Bad</span>";
      break;
    case "issue":
      statusText = "<span style='color: yellow;'>Cluster Status: Issue</span>";
      break;
    default:
      statusText = "Unknown status";
  }
  statusElement.innerHTML = statusText;
}

// Function to draw the graph
function drawGraph() {
  const graphElement = document.getElementById("graph");
  // Code to draw the graph using buildDurations data
}

// Call the functions to update status and draw graph when the page loads
window.onload = function() {
  updateStatus();
  drawGraph();
};
