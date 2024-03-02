require('dotenv').config();
const contentful = require('contentful');

const contentfulClient = contentful.createClient({
  accessToken: secrets.CTF_CDA_ACCESS_TOKEN,
  space: secrets.CTF_SPACE_ID,
});

exports.contentfulClient = contentfulClient;
