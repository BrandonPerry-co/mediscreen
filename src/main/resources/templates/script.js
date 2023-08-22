document.getElementById('userInfoForm').addEventListener('add', function(event) {
    event.preventDefault();

    const formData = {
        family: document.getElementById('family').value,
        given: document.getElementById('given').value,
        dob: document.getElementById('dob').value,
        sex: document.getElementById('sex').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
    };

    fetch('/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});