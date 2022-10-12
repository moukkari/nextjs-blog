import Link from "next/link";

export default function Footer({ allPostsData }) {
  return (
    <footer className="bg-[#2D2A38] py-16">
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
  </footer>
  )
}