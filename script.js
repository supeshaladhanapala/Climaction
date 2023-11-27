function calculateCarbon() {
    // Get user inputs
    const electricityUsage = parseFloat(document.getElementById('electricity').value);
    const gasUsage = parseFloat(document.getElementById('gas').value);
    const transportMiles = parseFloat(document.getElementById('transport').value);

    // Constants for conversion factors
    const electricityFactor = 0.404; 
    const gasFactor = 5.3;           
    const transportFactor = 0.27;    

    // Calculate total carbon footprint
    const totalCarbon = (electricityUsage * electricityFactor + gasUsage * gasFactor + transportMiles * transportFactor) / 1000;

    // Display the result
    document.getElementById('carbonResult').innerText = totalCarbon.toFixed(2);
}


function menuFunction(){
    var x = document.querySelector(".dropdownresponsive");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    
   
}