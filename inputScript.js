document.getElementById("inputForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get input values
  const clusterStatus = document.getElementById("clusterStatus").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const duration = parseInt(document.getElementById("duration").value);

  // Do something with the input data (you can send it to a server or store it locally)

  // For demonstration purposes, let's just log the data to console
  console.log("Cluster Status:", clusterStatus);
  console.log("Start Date:", startDate);
  console.log("End Date:", endDate);
  console.log("Duration:", duration);

  // Call a function to update the output page with the selected date range
  updateOutputPage(clusterStatus, startDate, endDate, duration);

  // Clear form fields after submission (optional)
  document.getElementById("clusterStatus").value = "good"; // Reset dropdown
  document.getElementById("startDate").value = ""; // Clear start date input
  document.getElementById("endDate").value = ""; // Clear end date input
  document.getElementById("duration").value = ""; // Clear duration input
});

function updateOutputPage(clusterStatus, startDate, endDate, duration) {
  // Redirect to the output page with query parameters
  window.location.href = `output.html?clusterStatus=${clusterStatus}&startDate=${startDate}&endDate=${endDate}&duration=${duration}`;
}
