function calculateFootprint() {
    const electricity = parseFloat(document.getElementById('electricity').value);
    const carTravel = parseFloat(document.getElementById('carTravel').value);
    
    // Emission factors
    const electricityFactor = 0.92; // kg CO2e per kWh
    const carTravelFactor = 0.404; // kg CO2e per mile
    
    // Calculating emissions
    const electricityEmissions = electricity * electricityFactor;
    const carTravelEmissions = carTravel * carTravelFactor;
    const totalEmissions = electricityEmissions + carTravelEmissions;
    
    // Display result
    document.getElementById('result').innerText = `${totalEmissions.toFixed(2)} kg CO2e/year`;
}
