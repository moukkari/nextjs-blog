import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import {  GetStaticPropsContext } from 'next';
import Link from 'next/link';
import Date from '../components/date';

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
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} container px-2`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={`${utilStyles.list} flex flex-wrap md:flex-row gap-[5%]`}>
            {allPostsData.map(({ id, date, title, imgSrc }) => (
              <li className={`${utilStyles.listItem} border border-gray-300 rounded-lg w-full sm:w-[47.5%] md:w-[30%] overflow-hidden shadow-xl flex flex-col`} key={id}>
                <img src={imgSrc} alt={id} className="aspect-[13.25/9.1] w-full" />
                <div className="p-3 grow flex flex-col">
                  <Link href={`/posts/${id}`}>
                    <a className="grow text-[16px] font-bold text-black">{title}</a>
                  </Link>
                  
                  <small className={`${utilStyles.lightText} text-right pt-4 text-[14px]`}>
                    <Date dateString={date} />
                  </small>
                </div>
                
              </li>
            ))}
          </ul>
        </section>
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

        <section className="bg-[#2D2A38] py-16">
          <div className="container flex flex-col md:flex-row">
              <div className="px-[12.5%] text-white flex flex-col gap-8 md:w-1/2">
                <img src="/img/image5.png" alt="ikius" className="w-1/4 md:w-1/2" />
                <p>Ikius recruitment task</p>
              </div>
              <div className="px-[12.5%] text-white flex flex-col gap-8 md:w-1/2">
                <h2>Blog posts</h2>
                <ul>
                  {allPostsData.map(({ id, title }) => (
                    <Link href={`/posts/${id}`} key={id}>
                      <a className="text-white underline hover:text-blue-500">
                        <li className="text-xs">{title}</li>
                      </a>
                    </Link>
                  ))}
                </ul>
              </div>
          </div>
        </section>
        
      </Layout>
    </>
  );
}