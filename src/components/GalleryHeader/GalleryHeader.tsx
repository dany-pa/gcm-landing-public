import { SerializedStyles } from '@emotion/react';
import { wrapperStyle, headerStyle, titleStyle, containerStyle, imageStyle, itemStyle, buttonStyle } from './styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Manekineko from '../../images/Maneki-neko.png';
import { BREAKPOINT_TABLET, BREAKPOINT_MOBILE, BREAKPOINT_LAPTOP } from '../../const/breakpoints';
import { useState, useEffect, FC } from 'react';
import { Button } from '../../components/ui';

interface Props {
    style?: SerializedStyles;
    data: { gallery: { nodes: [] } };
}

export const GalleryHeader: FC<Props> = (props) => {
    const gallery = props.data.gallery.nodes;

    const isBrowser = typeof window !== 'undefined';

    const [width, setWidth] = useState(() => {
        if (isBrowser) {
            return window.innerWidth;
        }
    });

    function handleWindowSizeChange() {
        if (isBrowser) {
            setWidth(window.innerWidth);
        }
    }
    useEffect(() => {
        if (isBrowser) {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            };
        }
    }, []);

    const isMobile = width <= BREAKPOINT_MOBILE;
    const isTablet = width <= BREAKPOINT_TABLET;
    const isLaptop = width <= BREAKPOINT_LAPTOP;

    const imageCount = () => {
        if (isMobile) {
            return 6;
        } else if (isTablet) {
            return 4;
        } else if (isLaptop) {
            return 9;
        } else {
            return 12;
        }
    };

    const max = 100;
    const [images, setImages] = useState([]);
    const [limit, setLimit] = useState(() => imageCount());

    const fetchImages = () => {
        setImages(gallery);
    };

    const handleShowMoreImages = () => {
        if (limit <= max) {
            setLimit(limit + imageCount());
        }
    };

    useEffect(() => {
        fetchImages();
    });

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
            <div css={[containerStyle]}>
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
            <Button
                onClick={handleShowMoreImages}
                style={buttonStyle}
            >
                View More
            </Button>
        </div>
    );
};
