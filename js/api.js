// api.js

/**
 * Function to make API calls to the backend.
 * @param {string} endpoint - The API endpoint.
 * @param {object} data - The data to be sent in the body of the request.
 * @returns {Promise<object>} - The response from the API.
 */
async function apiCall(endpoint, data) {
    const response = await fetch(endpoint, {
        method: 'POST', // or 'GET', 'PUT', etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
}

/**
 * Function to fetch data from a specific endpoint.
 * @param {string} endpoint - The API endpoint.
 * @returns {Promise<object>} - The response from the API.
 */
async function fetchData(endpoint) {
    const response = await fetch(endpoint);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
}