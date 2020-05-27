import axios from 'axios';

/* ON PRODUCTION 'baseURL' INTO .env FILE TO SECURE ENDPOINT (process.env.REACT_APP_BASE_URL) */
const baseURL = 'https://api.sr-frontend-dev.hiring.toolhouse.cloud';

export const fetchAllPatients = async () => {
  try {
    const result = await axios.get(`${baseURL}/api/v1/patients`);
    return result;
  } catch (err) {
    return new Error(err);
  }
};

export const fetchOnePatient = async (id) => {
  try {
    const result = await axios.get(`${baseURL}/api/v1/patients/${id}/benefits`);
    return result;
  } catch (err) {
    return new Error(err);
  }
};
