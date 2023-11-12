//Fetching all the Patients

// Posting A New Patient this works
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('mediscreenForm');
    form.addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
    event.preventDefault();

    let address = document.getElementById('address').value;
    let dob = document.getElementById('dob').value;
    let family = document.getElementById('family').value;
    let given = document.getElementById('given').value;
    let sex = document.getElementById('sex').value;
    let phone = document.getElementById('phone').value;

    let payload = {
        address: address,
        dob: dob,
        family: family,
        given: given,
        sex: sex,
        phone: phone
    };

    fetch('http://localhost:8081/patient/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(payload)
    })
    .then(response => response.json())
    .then(data => {
        alert(`Patient added successfully!\n\nName: ${data.given} ${data.family}\nDOB: ${data.dob}\nAddress: ${data.address}\nSex: ${data.sex}\nPhone: ${data.phone}`);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to add patient.');
    });
}

document.getElementById('mediscreenUpdateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    updatePatient();
});

window.updatePatient = updatePatient;

function updatePatient() {
console.log('updatePatient function called');
    let id = document.getElementById('id').value;
    let address = document.getElementById('address').value;
    let dob = document.getElementById('dob').value;
    let family = document.getElementById('family').value;
    let given = document.getElementById('given').value;
    let sex = document.getElementById('sex').value;
    let phone = document.getElementById('phone').value;

    let userDetails = {
        address: address,
        dob: dob,
        family: family,
        given: given,
        sex: sex,
        phone: phone
    };

    Object.keys(userDetails).forEach(key => {
        if (!userDetails[key]) delete userDetails[key];
    });

    fetch(`http://localhost:8081/patient/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
    })
    .then(response => response.json())
    .then(data => {
        let infoDiv = document.getElementById('updatedPatientInfo');
        infoDiv.innerHTML = `
            Name: ${data.given} ${data.family}<br>
            DOB: ${data.dob}<br>
            Address: ${data.address}<br>
            Sex: ${data.sex}<br>
            Phone: ${data.phone}
        `;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    fetchPatients();
});

function fetchPatients() {
    fetch("http://localhost:8081/patient/findAll")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(patients => {
        const patientsList = document.getElementById("patientsList");

        // Check if patientsList exists
        if (!patientsList) {
            console.warn("Element with ID 'patientsList' not found in the DOM.");
            return;
        }

        patients.forEach(patient => {
            const patientInfo = document.createElement("div");
            patientInfo.textContent = `
                ID: ${patient.id}
                Address: ${patient.address},
                DOB: ${patient.dob},
                Family: ${patient.family},
                Given: ${patient.given},
                Sex: ${patient.sex},
                Phone: ${patient.phone}
            `;
            patientsList.appendChild(patientInfo);
        });
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error.message);
    });
}

