const { google } = require("googleapis");
const keys = require("./../keys.json");

// authorization token generation for google api connection
const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  "https://www.googleapis.com/auth/spreadsheets.readonly",
]);

// function to connect into google sheets
const gsrun = async (cl) => {
  const gsapi = google.sheets({ version: "v4", auth: cl }); //connection to google sheets
  const options = {
    spreadsheetId: "1ivKo9V6YpYnIYyqC18BIjymELaCS16OP2l2AJ91lkO4",
    range: "A2:E121",
  }; // sheet properties to be passed

  let data = await gsapi.spreadsheets.values.get(options);
  let dataArray = data.data.values;
  dataArray = dataArray.map((r) => {
    // adding null values into empty spaces in sheets
    while (r.length < 5) {
      r.push(" ");
    }
    return r;
  });
  return dataArray;
};

// function to create connection between google api and server

const getData = async () => {
  try {
    await client.authorize();
    const data = await gsrun(client); // connection to google sheets
    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

module.exports = { getData };
