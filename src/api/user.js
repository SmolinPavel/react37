import { ENV } from 'consts';

export const addUser = async payload => {
  try {
    await fetch(`${ENV.API_HOST}/user/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(`${ENV.API_HOST}/user/list`);

    if (response.ok) {
      const data = await response.json();

      return data;
    }

    return [];
  } catch (error) {
    console.error(error);
  }
};
