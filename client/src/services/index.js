export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_API_APP}/Table%201`;
export const projectURL = `https://api.airtable.com/v0/${process.env.REACT_APP_API_PROJECT}/Table%201`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
};
