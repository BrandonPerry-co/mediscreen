//Fetching all the Patients
document.addEventListener("DOMContentLoaded", function() {
    fetchAllPatients();
});

function fetchAllPatients() {
    fetch('http://localhost:8081/patient/findAll')
    .then(response => response.json())
    .then(data => {
        let patientsList = document.createElement('ul');

        data.forEach(patient => {
            let listItem = document.createElement('li');
            listItem.textContent = `${patient.given} ${patient.family} (${patient.dob}) - ${patient.address}, ${patient.phone}, ${patient.sex}`;
            patientsList.appendChild(listItem);
        });

        document.body.appendChild(patientsList);
    });
}


//Updating the Patient
document.addEventListener("DOMContentLoaded", function() {
    updatePatient();
});

function updatePatient(id) {
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

    fetch(`http://localhost:8081/patient/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        location.reload();
    });
}

//// Posting A New Patient
//document.addEventListener("DOMContentLoaded", function() {
//    const form = document.getElementById('mediscreenForm');
//    form.addEventListener('submit', handleSubmit);
//});
//
//function handleSubmit(event) {
//    event.preventDefault(); // Prevent default form submission
//
//    let address = document.getElementById('address').value;
//    let dob = document.getElementById('dob').value;
//    let family = document.getElementById('family').value;
//    let given = document.getElementById('given').value;
//    let sex = document.getElementById('sex').value;
//    let phone = document.getElementById('phone').value;
//
//    let payload = {
//        address: address,
//        dob: dob,
//        family: family,
//        given: given,
//        sex: sex,
//        phone: phone
//    };
//
//    // Make the POST request using Fetch API
//    fetch('http://localhost:8081/patient/add', {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/x-www-form-urlencoded'
//        },
//        body: new URLSearchParams(payload)
//    })
//    .then(response => response.json())
//    .then(data => {
//        console.log(data);
//        alert('Patient successfully added!');
//    })
//    .catch(error => {
//        console.error('Error:', error);
//        alert('Failed to add patient.');
//    });
//}


// Posting A New Patient
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


// Ensure the DOM is loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('mediscreenUpdateForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let patientId = document.getElementById('patientId').value;
        updatePatient(patientId);
    });
});

function updatePatient(id) {
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

    fetch(`http://localhost:8081/patient/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        // Display the updated patient information below the h2 tag
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

        patients.forEach(patient => {
            const patientInfo = document.createElement("div");
            patientInfo.textContent = `
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

