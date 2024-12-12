document.addEventListener('DOMContentLoaded', () => {
    fetch('./nav.html') // To use the current directory
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.error('Error loading navigation:', error));
});

//Function to sync records to server
function syncRecords() {
    const bpData = JSON.parse(localStorage.getItem('bpData')) || [];
    if (bpData.length === 0) {
        alert('No records to sync.');
        return;
    }

    //Syncing Process
    alert('Syncing records to the server...');
    setTimeout(() => {
        alert('Records synced successfully!');
    }, 2000);
}