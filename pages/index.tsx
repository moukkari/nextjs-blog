import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import {  GetStaticPropsContext } from 'next';
import Footer from '../components/footer';
import Posts from '../components/posts';

export async function getStaticProps(props: GetStaticPropsContext) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

       <Posts allPostsData={allPostsData} />

        <section className="bg-[#2D2A38] py-8 mt-8">
          <div className="text-white text-center container flex flex-col gap-8 px-2">
            <h1 className="mx-auto text-[2rem] md:text-[3rem] font-bold">
              This is to test your<span className="text-[#3CC2D3] border-b-[10px] pb-2 border-[#3CC2D3]">&nbsp;css&nbsp;</span>skills.
            </h1>
            <p>No real function for this, but this will give us a good indication for your level of expertise with css. Feel free to show off in case this feels too easy.</p>
          </div>
        </section>
        
        <section className="container m-24 bg-blue-700 relative z-10 w-full">
          <img src="/img/image6.png" alt="flag" className="z-[-20] w-full h-56 object-cover object-center md:w-1/2" />
          <div className="hidden md:block absolute right-1/2 top-0 h-full w-1/6 tilted z-[10]"></div>
          <div className="md:absolute py-8 md:py- 0 right-0 top-0 h-full md:w-1/2 bg-white z-[-10] flex items-center justify-center">
            <form className="flex flex-col gap-4">
              <input placeholder="Label" className="border rounded-md p-2 placeholder:text-sm" />
              <div className="relative">
                <label htmlFor="x" className="absolute -top-1 px-1 bg-white left-[8px] text-[8px]">Label</label>
                <input id="x" placeholder="Input text" className="border rounded-md p-2 placeholder:text-sm" />
              </div>
            </form>
          </div>
        </section>

       <Footer allPostsData={allPostsData} />
        
      </Layout>
    </>
  );
}