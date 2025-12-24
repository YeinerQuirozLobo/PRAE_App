document.getElementById('plan-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const grade = document.getElementById('grade').value;
    const subject = document.getElementById('subject').value;
    const prae = document.getElementById('prae').value;
    const sessions = document.getElementById('sessions').value;

    const data = {
        grade: grade,
        subject: subject,
        prae: prae,
        sessions: sessions
    };

    fetch('/generate-plan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('output').textContent = JSON.stringify(result, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
