const client = require('../utils').contentfulClient;

module.exports = async () => {
  const cameras = await client.getEntries({
	content_type: 'camera'
  });

  return cameras.items
};