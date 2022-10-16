import Date from "./date";
import BackToHome from "./backToHome";
import { StructuredText } from "react-datocms";
import utilStyles from "../styles/utils.module.css";

export default function Blog({ post }: { post: Blog }) {
  const { title, date, name, image, coverImage, body } = post;
  const cover = coverImage?.responsiveImage?.srcSet;
  const authorImg = image?.responsiveImage?.srcSet;
  return (
    <>
      <section className="container p-2 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <img
              src={authorImg || "/img/Ellipse2.png"}
              alt="author image"
              className="rounded-full h-8 w-8"
            />
            {name}
          </div>
          <Date dateString={date} />
        </div>
        {cover && <img src={cover} alt="" className="w-full" />}
        <BackToHome />
      </section>

      <article className="container px-2 article-content">
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <StructuredText data={body} />
      </article>
    </>
  );
}
