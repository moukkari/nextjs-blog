import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';

export default function Posts({ allPostsData, title = "Blog" }) {
  return (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} container px-2`}>
    <h2 className={utilStyles.headingLg}>{title}</h2>
    <ul className={`${utilStyles.list} flex flex-wrap md:flex-row gap-[3%]`}>
      {allPostsData.map(({ id, date, title, imgSrc }) => (
        <li className={`${utilStyles.listItem} border border-gray-300 rounded-lg w-full sm:w-[48.5%] md:w-[31.33%] overflow-hidden shadow-xl flex flex-col`} key={id}>
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
  )
}