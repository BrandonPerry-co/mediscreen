//Fetching all the Patients


//function fetchAllPatients() {
//    fetch('http://localhost:8081/patient/findAll')
//    .then(response => response.json())
//    .then(data => {
//        let patientsList = document.createElement('ul');
//
//        data.forEach(patient => {
//            let listItem = document.createElement('li');
//            listItem.textContent = `${patient.given} ${patient.family} (${patient.dob}) - ${patient.address}, ${patient.phone}, ${patient.sex}`;
//            patientsList.appendChild(listItem);
//        });
//
//        document.body.appendChild(patientsList);
//    });
//}

// Updating patient
//function updatePatient(id) {
//    const fieldValue = document.getElementById(id).value;
//
//    if(!fieldValue) {
//        alert(`Please enter a value for ${id} before updating.`);
//        return;
//    }
//
//    fetch(`http://localhost:8081/patient/update/${id}`, {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json',
//        },
//        body: JSON.stringify({
//            field: fieldId,
//            value: fieldValue
//        })
//    })
//    .then(response => response.json())
//    .then(data => {
//        if(data.success) {
//            alert(`Successfully updated ${fieldId}!`);
//        } else {
//            alert(`Failed to update ${fieldId}. Please try again.`);
//        }
//    })
//    .catch(error => {
//        console.error(`Error updating ${fieldId}:`, error);
//        alert(`An error occurred while updating ${fieldId}. Please try again.`);
//    });
//}

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


// Ensure the DOM is loaded before attaching event listeners
//document.addEventListener("DOMContentLoaded", function() {
//    const form = document.getElementById('mediscreenUpdateForm');
//    form.addEventListener('submit', function(event) {
//        event.preventDefault();
//        let patientId = document.getElementById('id').value;
//        updatePatient(id);
//    });
//});
document.getElementById('mediscreenUpdateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    updatePatient();
});

//function updatePatient(id) {
//    let id = document.getElementById('id').value;
//    let address = document.getElementById('address').value;
//    let dob = document.getElementById('dob').value;
//    let family = document.getElementById('family').value;
//    let given = document.getElementById('given').value;
//    let sex = document.getElementById('sex').value;
//    let phone = document.getElementById('phone').value;
//
////    let payload = {
////        address: address,
////        dob: dob,
////        family: family,
////        given: given,
////        sex: sex,
////        phone: phone
////    };
//
//      Object.keys(userDetails).forEach(key => {
//                if (!userDetails[key]) delete userDetails[key];
//            });
//
//    fetch(`http://localhost:8081/patient/update/${id}`, {
//        method: 'PUT',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(userDetails)
//    })
//    .then(response => response.json())
//    .then(data => {
//        // To display the updated patient information
//        let infoDiv = document.getElementById('updatedPatientInfo');
//        infoDiv.innerHTML = `
//            Name: ${data.given} ${data.family}<br>
//            DOB: ${data.dob}<br>
//            Address: ${data.address}<br>
//            Sex: ${data.sex}<br>
//            Phone: ${data.phone}
//        `;
//    })
//    .catch(error => {
//        console.error('Error:', error);
//    });
//}
//
//document.addEventListener("DOMContentLoaded", function() {
//    fetchPatients();
//});


//window.updatePatient = updatePatient;
//
//function updatePatient(idElem) {
//let idElem = document.getElementById('id');
//    let address = document.getElementById('address').value;
//    let dob = document.getElementById('dob').value;
//    let family = document.getElementById('family').value;
//    let given = document.getElementById('given').value;
//    let sex = document.getElementById('sex').value;
//    let phone = document.getElementById('phone').value;
//
//    let userDetails = {
//        address: address,
//        dob: dob,
//        family: family,
//        given: given,
//        sex: sex,
//        phone: phone
//    };
//
//    // Clean up empty fields
//    Object.keys(userDetails).forEach(key => {
//        if (!userDetails[key]) delete userDetails[key];
//    });
//
//    fetch(`http://localhost:8081/patient/update/${id}`, {
//        method: 'PUT',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(userDetails)
//    })
//    .then(response => response.json())
//    .then(data => {
//        // Display the updated patient information
//        let infoDiv = document.getElementById('updatedPatientInfo');
//        infoDiv.innerHTML = `
//            Name: ${data.given} ${data.family}<br>
//            DOB: ${data.dob}<br>
//            Address: ${data.address}<br>
//            Sex: ${data.sex}<br>
//            Phone: ${data.phone}
//        `;
//    })
//    .catch(error => {
//        console.error('Error:', error);
//    });
//}
//
//document.addEventListener("DOMContentLoaded", function() {
//    // Assuming fetchPatients() is a function that populates some initial data.
//    fetchPatients();
//});

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


// Fetch all Patients
//function fetchPatients() {
//    fetch("http://localhost:8081/patient/findAll")
//    .then(response => {
//        if (!response.ok) {
//            throw new Error("Network response was not ok");
//        }
//        return response.json();
//    })
//    .then(patients => {
//        const patientsList = document.getElementById("patientsList");
//
//        patients.forEach(patient => {
//            const patientInfo = document.createElement("div");
//            patientInfo.textContent = `
//                ID: ${patient.id}
//                Address: ${patient.address},
//                DOB: ${patient.dob},
//                Family: ${patient.family},
//                Given: ${patient.given},
//                Sex: ${patient.sex},
//                Phone: ${patient.phone}
//            `;
//            patientsList.appendChild(patientInfo);
//        });
//    })
//    .catch(error => {
//        console.error("There was a problem with the fetch operation:", error.message);
//    });
//}
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

