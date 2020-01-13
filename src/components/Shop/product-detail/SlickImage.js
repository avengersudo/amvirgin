import React, {Component} from 'react';
import ReactSlick from "react-slick";
import ReactImageMagnify from 'react-image-magnify';

class SlickImage extends Component {
    render(){
        const {
            rimProps,
            rsProps
        } = this.props;
        //console.log(rimProps);
        return(
                <ReactImageMagnify
                    {...{
                        smallImage: {
                            alt: 'Wristwatch by Versace',
                            isFluidWidth: true,
                            src: rimProps.shortImage,
                            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                        },
                        largeImage: {
                            src: rimProps.shortImage,
                            width: 1426,
                            height: 2000
                        },
                        lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                    }}
                    {...rimProps}
                />
        )
    }
}

export default SlickImage;