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
