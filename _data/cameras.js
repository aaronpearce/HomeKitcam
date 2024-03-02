const client = require('../utils').contentfulClient;

module.exports = async () => {
  const posts = await client.getEntries({
	content_type: 'camera',
	order: '-sys.createdAt',
  });
  return posts.items;
};