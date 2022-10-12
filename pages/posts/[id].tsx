import Date from '../../components/date';
import { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Posts from '../../components/posts';
import Footer from '../../components/footer';
import BackToHome from '../../components/backToHome';

export default function Post({ postData, allPostsData }) {
  const { title, date, imgSrc, contentHtml } = postData;

  return (
    // <Layout>
    //   <Head>
    //     <title>{postData.title}</title>
    //   </Head>
   
    // </Layout>
    <>
    <section className="container p-2 flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img src="/img/Ellipse2.png" alt="author image" /> 
          Mark Johnson
        </div>
        <Date dateString={date} />
      </div>
      <img src={imgSrc} alt="" className="w-full" />
      <BackToHome />
    </section>

    <article className="container px-2">
      <h1 className={utilStyles.headingXl}>{title}</h1>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
    
    <Posts allPostsData={allPostsData} title="Other posts" />
    <Footer allPostsData={allPostsData} />
    </>
  );
}

export async function getStaticPaths({}: GetStaticPathsContext ) {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  // const postData = await getPostData(params.id);
  let allPostsData = getSortedPostsData();

  const postData = await getPostData(params.id);

  if (!postData) {
    return { notFound: true, revalidate: 60 };     
  }

  allPostsData = allPostsData.filter((x) => x.id !== postData.id);

  return {
    props: {
      postData,
      allPostsData
    },
  };
}