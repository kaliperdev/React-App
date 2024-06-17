import axios from 'axios';

// Replace the API key with your personal access token
const AIRTABLE_ACCESS_TOKEN = 'patlbc5v2uLOvaA4H.04853060843db83b0a2e64c171bc389d6583f169f3e3922025c4addd1b44a117';
const BASE_ID = 'app4ZQ9jav2XzNIv9';
const TABLE_NAME = 'dbagentauth';

export const saveUserToAirtable = async (user) => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
  const headers = {
    Authorization: `Bearer ${AIRTABLE_ACCESS_TOKEN}`,
    'Content-Type': 'application/json',
  };


  // Get the current timestamp
  const loginTimestamp = new Date().toISOString();

  const data = {
    fields: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      timestamp: loginTimestamp
    },
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('User saved to Airtable:', response.data);
  } catch (error) {
    console.error('Error saving user to Airtable:', error);
  }
};
