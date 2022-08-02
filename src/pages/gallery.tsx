import { MENU_LINKS } from '../const/general';
import { GalleryHeader } from '../components/GalleryHeader';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { graphql } from 'gatsby';

export const query = graphql`
    query {
      gallery: allFile(
        filter: {
          extension: { eq: "png" }
          absolutePath: { regex: "/gallery/" }
        }
      ) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData(width: 640)
          }
        }
      }
    }
  `;

function GalleryPage({ data }) {
    const links = MENU_LINKS.map((link) => ({
        ...link,
        link: `/${link.link}`,
    }));

    return (
        <DefaultLayout
            isMintPage={true}
            links={links}
            isShowLogo={true}
        >
            <GalleryHeader data={data} />
        </DefaultLayout>
    );
}

export default GalleryPage;
