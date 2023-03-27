/**
 * Class representing a Nameday API client.
 */
class NamedayApiClient {
  /**
   * Create a new NamedayApiClient.
   * @param {string} baseUrl - The base URL of the API.
   */
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  /**
   * Get the nameday for today.
   * @param {string} countryCode - The country code to get the nameday for.
   * @param {string} [timezone] - The timezone to use, optional.
   * @returns {Promise<string>} The nameday for today.
   */
  async getTodayNameday(countryCode, timezone) {
    const response = await fetch(`${this.baseUrl}/today/${countryCode}${timezone ? `?timezone=${timezone}` : ''}`);
    const data = await response.json();
    return data.nameday;
  }

  /**
   * Get the nameday for tomorrow.
   * @param {string} countryCode - The country code to get the nameday for.
   * @param {string} [timezone] - The timezone to use, optional.
   * @returns {Promise<string>} The nameday for tomorrow.
   */
  async getTomorrowNameday(countryCode, timezone) {
    const response = await fetch(`${this.baseUrl}/tomorrow/${countryCode}${timezone ? `?timezone=${timezone}` : ''}`);
    const data = await response.json();
    return data.nameday;
  }

  /**
   * Get the nameday for yesterday.
   * @param {string} countryCode - The country code to get the nameday for.
   * @param {string} [timezone] - The timezone to use, optional.
   * @returns {Promise<string>} The nameday for yesterday.
   */
  async getYesterdayNameday(countryCode, timezone) {
    const response = await fetch(`${this.baseUrl}/yesterday/${countryCode}${timezone ? `?timezone=${timezone}` : ''}`);
    const data = await response.json();
    return data.nameday;
  }

  /**
   * Get the nameday for a specific date.
   * @param {string} countryCode - The country code to get the nameday for.
   * @param {string} day - The day of the date to get the nameday for.
   * @param {string} month - The month of the date to get the nameday for.
   * @param {string} [timezone] - The timezone to use, optional.
   * @returns {Promise<string>} The nameday for the specified date.
   */
  async getNamedayByDate(countryCode, day, month, timezone) {
    const response = await fetch(`${this.baseUrl}/nameday/${countryCode}/${day}/${month}${timezone ? `?timezone=${timezone}` : ''}`);
    const data = await response.json();
    return data.nameday;
  }

  /**
   * Get the nameday for a specific name.
   * @param {string} countryCode - The country code to get the nameday for.
   * @param {string} name - The name to get the nameday for.
   * @param {string} [timezone] - The timezone to use, optional.
   * @returns {Promise<string>} The nameday for the specified name.
   */
  async getNamedayByName(countryCode, name, timezone) {
    const response = await fetch(`${this.baseUrl}/name/${countryCode}/${name}${timezone ? `?timezone=${timezone}` : ''}`);
    const data = await response.json();
    return data.nameday;
  }
}


/** 
 * Use:
 * 
 * const apiUrl = 'https://example.com/nameday-api';
 * const api = new NamedayAPI(apiUrl);
  api.today('CZ', 'Europe/Prague')
    .then((response) => {
      console.log(response.name);
    })
    .catch((error) => {
      console.error(error.message);
    });
 */

