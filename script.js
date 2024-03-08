document.addEventListener('DOMContentLoaded', function() {
    const addEmploymentBtn = document.getElementById('addEmploymentBtn');
    const employmentSection = document.getElementById('employment-section');

    let employmentCount = 1; 
    addEmploymentBtn.addEventListener('click', function() {
        employmentCount++; // Increment the employment counter

        // Create a new employment entry div
        const newEmploymentEntry = document.createElement('div');
        newEmploymentEntry.classList.add('employment-entry');

        // HTML for the new employment entry
        newEmploymentEntry.innerHTML = `
            <div class="input-group">
                <label for="jobTitle${employmentCount}" class="input-label">Job Title</label>
                <input type="text" name="jobTitle${employmentCount}" id="jobTitle${employmentCount}" class="inputfield">
            </div>
            <div class="input-group">
                <label for="startDate${employmentCount}" class="input-label">Start Date</label>
                <input type="date" name="startDate${employmentCount}" id="startDate${employmentCount}" class="inputfield">
            </div>
            <!-- Add more input fields for other employment details -->
        `;

        // Append the new employment entry to the employment section
        employmentSection.appendChild(newEmploymentEntry);
    });
});


document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Your form submission logic here
    // For demonstration, let's assume the data is stored in an object called formData

    // After successful submission, show the review button and submitted data
    document.getElementById("reviewButtonContainer").style.display = "block";
    document.getElementById("submittedData").style.display = "none"; // Hide previous submission data if any
});

function reviewApplication() {
    // Get the form data and populate the table
    var formData = {}; // Replace this with your form data

    // Populate the table with form data
    var table = document.getElementById("applicationTable");
    table.innerHTML = ""; // Clear previous data

    // Populate table rows with form data
    for (var key in formData) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = key;
        cell2.innerHTML = formData[key];
    }

    // Show the submitted data section
    document.getElementById("submittedData").style.display = "block";
}