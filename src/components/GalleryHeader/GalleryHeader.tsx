import { wrapperStyle, headerStyle, titleStyle, containerStyle, imageStyle, itemStyle, buttonStyle } from './styles';
import Img, { FixedObject } from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import Manekineko from '../../images/Maneki-neko.png';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Button } from '../../components/ui';

interface Image {
    id: string;
    childImageSharp: {
        fixed: FixedObject;
    };
}

interface GalleryQuery {
    allFile: {
        nodes: Image[];
    };
}

export const GalleryHeader = () => {
    const {
        allFile: { nodes: images },
    } = useStaticQuery<GalleryQuery>(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
        totalCount
        nodes {
          childImageSharp {
            fixed(width: 650) {
              src
              originalName
              width
                height
            },
            id
          }
        }
      }
    }
  `);

    return (
        <div css={wrapperStyle}>
            <div css={headerStyle}>
                <img
                    css={imageStyle}
                    src={Manekineko}
                    alt="Manekineko image"
                />

                <h2 css={[titleStyle]}>What kind of Cat are you today?</h2>
            </div>
            <div
                id="#top"
                css={[containerStyle]}
            >
                {images.map((img, index) => {
                    return (
                        <Zoom key={index}>
                            <Img
                                fixed={img.childImageSharp.fixed}
                                key={img.id}
                                css={itemStyle}
                            />
                        </Zoom>
                    );
                })}
            </div>
            <Button
                style={buttonStyle}
                onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Move to Top
            </Button>
        </div>
    );
};
