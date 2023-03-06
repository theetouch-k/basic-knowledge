function getStatus() {
    fetch('#/currentstatus', {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
    .then((response) => response.json())
    .then((data) => data["result"].forEach(patient => {
        updatePatient(patient['name'],patient['age'],patient['address'],patient['status'])
    }));
}

function getMessageLog() {
    fetch('#/messagelog', {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
    .then((response) => response.json())
    .then((data) => data["result"].forEach(data => {
        // updateStatus(data['name'],data['sentmessage'],data['answer']);
    }));
}

function updateStatus() {
    
}

document.setInterval(() =>{updateData();}, 1000);