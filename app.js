async function apicall() {
    // URL of the API endpoint
    const url = 'https://api.smartrecruiters.com/feed/publications';

    // Options for the fetch request
    const options = {
        method: 'GET', // HTTP method
        headers: {
            'X-SmartToken': 'abc123' // Set your token here
        }
    };

    // Using fetch to get data from the API
    fetch(url, options)
        .then(response => {
            if (!response.ok) { // Check if response is ok (i.e., status is in the range 200-299)
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse JSON data from the response
        })
        .then(data => {
            console.log(data); // Log data to the console
            // You can handle your data here
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });

}


function displayJobs(data) {
    const container = document.getElementById('jobsContainer');
    container.innerHTML = ''; // Clear previous results
    if (data.results && data.results.length > 0) {
        data.results.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.innerHTML = `
                <h2>${job.jobtitle}</h2>
                <p>${job.company}</p>
                <p>${job.snippet}</p>
                <a href="${job.url}" target="_blank">View Job</a>
            `;
            container.appendChild(jobElement);
        });
    } else {
        container.innerHTML = '<p>No jobs found.</p>';
    }
}