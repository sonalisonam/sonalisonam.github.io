function checkHealth() {
    var condition = document.getElementById('app-condition').value.toLowerCase().trim();
    var healthIndicator = document.getElementById('health-indicator');
    
    if (condition === 'red') {
        healthIndicator.textContent = 'Health Status: Red';
        healthIndicator.className = 'red';
    } else if (condition === 'yellow') {
        healthIndicator.textContent = 'Health Status: Yellow';
        healthIndicator.className = 'yellow';
    } else if (condition === 'green') {
        healthIndicator.textContent = 'Health Status: Green';
        healthIndicator.className = 'green';
    } else {
        healthIndicator.textContent = 'Invalid condition. Please enter red, yellow, or green.';
        healthIndicator.className = '';
    }
}
