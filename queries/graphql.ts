export const SITE_SEO = `
  {
    site: _site {
      globalSeo {
        siteName
        titleSuffix
      }
      faviconMetaTags {
        attributes
        content
        tag
      }
    }
  }
`;

export const SINGLE_BLOG_QUERY = (id: string) => `
  query SingleBlog {
    blog(filter: {id: {eq: ${id}}}) {
      date: _publishedAt
      body {
        value
      }
      coverImage {
        responsiveImage {
          srcSet
        }
      }
      id
      image {
        responsiveImage {
          srcSet
        }
      }
      name
      title
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
`;

export const ALL_BLOGS_QUERY = (id?: string) => `
  query AllBlogs {
    allBlogs${id ? `(filter: {id: {neq: ${id}}})` : ""} {
      date: _createdAt
      body {
        blocks
        value
        links
      }
      id
      name
      coverImage {
        responsiveImage {
          srcSet
        }
      }
      title
      image {
        responsiveImage {
          srcSet
        }
      }
    }
  }
`;

export const ALL_BLOG_IDS = `
  query AllBlogIds {
    allBlogs {
      id
    }
  }
`;
