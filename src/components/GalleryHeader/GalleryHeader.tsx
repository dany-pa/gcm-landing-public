import { wrapperStyle, headerStyle, titleStyle, containerStyle, imageStyle, itemStyle, buttonStyle } from './styles';
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Manekineko from '../../images/Maneki-neko.png';
import ArrowDownImg from '../../images/arrowDown.svg';
import ArrowUpImg from '../../images/arrowUp.svg';
import { BREAKPOINT_TABLET, BREAKPOINT_MOBILE, BREAKPOINT_LAPTOP } from '../../const/breakpoints';
import { useState, useEffect, useRef } from 'react';
import { Button } from '../../components/ui';

export const GalleryHeader = () => {
    // gallery.nodes as images
    const {
        gallery: { nodes: images },
    } = useStaticQuery(graphql`
query {
  gallery: allFile(
    filter: { extension: { eq: "png" }, absolutePath: { regex: "/gallery/" } }
  ) {
    nodes {
      id
      childImageSharp {
        gatsbyImageData(
          width: 640
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
}
  `);

    const isBrowser = typeof window !== 'undefined';

    const [width, setWidth] = useState(() => {
        if (isBrowser) {
            return window.innerWidth;
        }
    });

    const useElementOnScreen = (options) => {
        const containerRef = useRef(null);
        const [isVisible, setIsVisible] = useState(false);

        const callbackFunction = (entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        };

        useEffect(() => {
            const observer = new IntersectionObserver(callbackFunction, options);
            if (containerRef.current) observer.observe(containerRef.current);

            return () => {
                if (containerRef.current) observer.unobserve(containerRef.current);
            };
        }, [containerRef, options]);

        return [containerRef, isVisible];
    };

    const [containerRef, isVisible] = useElementOnScreen({ root: null, rootMargin: '0px', threshold: 0.1 });

    const handleShowMoreImages = () => {
        if (limit <= max) {
            if (isVisible) setLimit(limit + imageCount());
        }
    };

    function handleWindowSizeChange() {
        if (isBrowser) {
            setWidth(window.innerWidth);
        }
    }
    useEffect(() => {
        handleShowMoreImages();
        if (isBrowser) {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            };
        }
    }, [isVisible]);

    const isMobile = width <= BREAKPOINT_MOBILE;
    const isTablet = width <= BREAKPOINT_TABLET;
    const isLaptop = width <= BREAKPOINT_LAPTOP;

    const imageCount = () => {
        if (isMobile) {
            return 12;
        } else if (isTablet) {
            return 4;
        } else if (isLaptop) {
            return 9;
        } else {
            return 12;
        }
    };

    const max = 100;

    const [limit, setLimit] = useState(() => imageCount());

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
                {images.slice(0, limit).map((img) => (
                    <div key={img.id}>
                        <GatsbyImage
                            css={[itemStyle]}
                            alt={'Gallery Image'}
                            image={getImage(img)}
                        />
                    </div>
                ))}
            </div>
            {/* <div
                style={{
                    width: 170,
                    margin: '0 auto',
                }}
            >
                <p
                    style={{
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: 11,
                        lineHeight: '13px',
                        paddingTop: 47,
                        paddingBottom: 7,
                    }}
                >{`You’ve viewed ${limit < 100 ? limit : 100} of ${max} nft’s`}</p>
                <div
                    style={{
                        background: '#D9D9D9',
                    }}
                >
                    <div
                        style={{
                            width: `${limit < 100 ? limit : 100}%`,
                            background: '#0DB7E8',
                            height: 11,
                        }}
                    ></div>
                </div>
            </div> */}
            <div
                ref={containerRef}
                style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    width: 'auto',
                    margin: '0 auto',
                }}
            >
                {/* <a href="#top">
                    <img
                        style={{
                            paddingTop: '2px',
                        }}
                        src={ArrowUpImg}
                        alt="Navigation Up"
                    />
                </a> */}
                {limit >= max ? (
                    <Button
                        style={buttonStyle}
                        onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Move to Top
                    </Button>
                ) : null}

                {/* <Button
                    onClick={handleShowMoreImages}
                    style={buttonStyle}
                >
                    View More
                </Button> */}
                {/* <a href="#bottom">
                    <img
                        src={ArrowDownImg}
                        alt="Navigation Down"
                    />
                </a> */}
            </div>
        </div>
    );
};
