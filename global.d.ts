interface Image {
  responsiveImage: {
    srcSet: string;
  };
}

interface Blog {
  date: string;
  body: Document | Node | StructuredText<Record, Record>;
  coverImage: Image;
  id: string;
  image: Image;
  name: string;
  title: string;
  seo: {
    title: string;
    description: string;
  };
}

interface SiteMeta {
  globalSeo: {
    siteName: string;
    titleSuffix: string;
  };
  faviconMetaTags: [
    {
      attributes: {
        sizes: string;
        type: string;
        rel: string;
        href: string;
      };
      content: any;
      tag: string;
    }
  ];
}
