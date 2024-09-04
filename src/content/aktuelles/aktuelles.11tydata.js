module.exports = {
	tags: ["news"],
	layout: "layouts/post.njk",
	permalink: "/aktuelles/{{ title | slugify }}/",
};
