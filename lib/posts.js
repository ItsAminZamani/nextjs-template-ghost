import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "https://blog.aminzamani.com",
  key: "eff0bdb9759b8940fd164807fd",
  version: "v3",
});

export async function getPosts(i = 1) {
  return await api.posts
    .browse({
      include: "tags,authors",
      limit: "1",
      page: i,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPages() {
  return await api.pages
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getAuthor(authorSlug) {
  return await api.authors
    .read({
      slug: authorSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
