import axios from "axios";

class NamedayAPI {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  getToday(countryCode, timezone = null) {
    const params = { countryCode: countryCode };
    if (timezone) {
      params.timezone = timezone;
    }
    return axios.get(`${this.apiUrl}/today`, { params: params });
  }

  getTomorrow(countryCode, timezone = null) {
    const params = { countryCode: countryCode };
    if (timezone) {
      params.timezone = timezone;
    }
    return axios.get(`${this.apiUrl}/tomorrow`, { params: params });
  }

  getYesterday(countryCode, timezone = null) {
    const params = { countryCode: countryCode };
    if (timezone) {
      params.timezone = timezone;
    }
    return axios.get(`${this.apiUrl}/yesterday`, { params: params });
  }

  getNameDay(day, month, countryCode, timezone = null) {
    const params = {
      day: day,
      month: month,
      countryCode: countryCode,
    };
    if (timezone) {
      params.timezone = timezone;
    }
    return axios.get(`${this.apiUrl}/getnameday`, { params: params });
  }

  getDate(name, countryCode, timezone = null) {
    const params = {
      name: name,
      countryCode: countryCode,
    };
    if (timezone) {
      params.timezone = timezone;
    }
    return axios.get(`${this.apiUrl}/getdate`, { params: params });
  }
}

export default NamedayAPI;
