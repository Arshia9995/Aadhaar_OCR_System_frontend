// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/ocr';

// export const uploadAadhaarImages = async (formData: FormData) => {
//   const response = await axios.post(API_URL, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
//   return response.data;
// };




import axios from 'axios';
import { API_URL } from '../constants/api';

// const API_URL = 'http://localhost:5000/api/ocr';

// const API_URL = 'https://aadhaar-ocr-system-backend-roow.onrender.com/api/ocr'

export const uploadAadhaarImages = async (formData: FormData) => {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error: any) {
    // Re-throw the error so it can be handled by the component
    throw error;
  }
};

