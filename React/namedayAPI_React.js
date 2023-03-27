import axios from 'axios';

class NamedayAPI {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async today(countryCode, timezone = '') {
    try {
      const response = await axios.get(`${this.baseURL}/today`, {
        params: {
          countryCode: countryCode,
          timezone: timezone
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async tomorrow(countryCode, timezone = '') {
    try {
      const response = await axios.get(`${this.baseURL}/tomorrow`, {
        params: {
          countryCode: countryCode,
          timezone: timezone
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async yesterday(countryCode, timezone = '') {
    try {
      const response = await axios.get(`${this.baseURL}/yesterday`, {
        params: {
          countryCode: countryCode,
          timezone: timezone
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getnameday(countryCode, day, month, timezone = '') {
    try {
      const response = await axios.get(`${this.baseURL}/getnameday`, {
        params: {
          countryCode: countryCode,
          day: day,
          month: month,
          timezone: timezone
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getdate(countryCode, name, timezone = '') {
    try {
      const response = await axios.get(`${this.baseURL}/getdate`, {
        params: {
          countryCode: countryCode,
          name: name,
          timezone: timezone
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default NamedayAPI;
