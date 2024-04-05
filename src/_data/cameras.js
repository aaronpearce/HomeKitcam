const client = require('../utils').contentfulClient;

module.exports = async () => {
  const cameras = await client.getEntries({
	content_type: 'camera'
  });

  return cameras.items
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};