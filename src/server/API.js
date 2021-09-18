const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const application_key = process.env.API_KEY;

const fetchAPI = async (data) => {
  const res = await axios(
    `https://api.meaningcloud.com/sentiment-2.1?key=${application_key}&of=json&url=${data.url}&model=general&lang=en`
  );
  try {
    return res.data;
  } catch (e) {
    console.log("Error", e);
  }
};

module.exports = fetchAPI;
