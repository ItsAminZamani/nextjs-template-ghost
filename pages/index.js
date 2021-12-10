import { getPosts } from "../lib/posts";
import Head from "next/head";
import { Layout, Home, siteTitle } from "../components";

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }
  console.log(posts);
  return {
    props: { posts },
  };
}

export default function index(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Home posts={props.posts} />
    </Layout>
  );
}
