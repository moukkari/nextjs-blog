import { GetStaticPathsContext, GetStaticPropsContext } from "next";
import Posts from "../../components/posts";
import Footer from "../../components/footer";
import { request } from "../../lib/datocms";
import {
  ALL_BLOGS_QUERY,
  ALL_BLOG_IDS,
  SINGLE_BLOG_QUERY,
  SITE_SEO,
} from "../../queries/graphql";
import Blog from "../../components/blog";
import { renderMetaTags } from "react-datocms";
import Head from "next/head";

interface PostPage {
  siteMetaData: SiteMeta;
  postData: Blog;
  allPostsData: Blog[];
}

export default function Post(props: PostPage) {
  const { postData, allPostsData, siteMetaData } = props;
  return (
    <>
      <Head>
        {renderMetaTags(
          (postData?.seo as any)?.concat(siteMetaData.faviconMetaTags)
        )}
      </Head>
      <Blog post={postData} />

      <Posts allPostsData={allPostsData} title="Other posts" />
      <Footer allPostsData={allPostsData} />
    </>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const postData: { blog: Blog } = await request({
    query: SINGLE_BLOG_QUERY(params.id as string),
  });

  if (!postData) {
    return { notFound: true, revalidate: 60 };
  }

  const siteMetaData: { site: SiteMeta } = await request({ query: SITE_SEO });

  const allPostsData: { allBlogs: Blog[] } = await request({
    query: ALL_BLOGS_QUERY(params.id as string),
    variables: { limit: 3 },
  });

  return {
    props: {
      siteMetaData: siteMetaData.site,
      postData: postData.blog,
      allPostsData: allPostsData.allBlogs,
    },
  };
}

export async function getStaticPaths({}: GetStaticPathsContext) {
  const allPostsData: { allBlogs: Partial<Blog[]> } = await request({
    query: ALL_BLOG_IDS,
  });

  const paths = allPostsData.allBlogs.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
}
