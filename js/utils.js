'use strict';

/**
 * Utility functions
 */

/**
 * Get the current date and time in UTC format (YYYY-MM-DD HH:MM:SS)
 * @returns {string} - Formatted date and time string
 */
function getCurrentDateTime() {
    const now = new Date();
    return now.toISOString().slice(0, 19).replace('T', ' ');
}

/**
 * Log a message with the current date and time
 * @param {string} message - Message to log
 */
function logWithDateTime(message) {
    console.log(`[${getCurrentDateTime()}] ${message}`);
}

module.exports = {
    getCurrentDateTime,
    logWithDateTime
};