import React, { Component } from 'react';
import { Player, ControlBar, PosterImage, ClosedCaptionButton, ForwardControl, ReplayControl, BigPlayButton } from 'video-react';
import './style.css';
class Video extends Component {
    constructor(props){
        super(props);
        this.state = {
            source: this.props.src,
            visible: false,
        }
    }
    componentDidMount() {
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
        document.addEventListener('contextmenu', this._handleContextMenu);
        document.addEventListener('keydown', this._handleOnKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('contextmenu', this._handleContextMenu);
        document.addEventListener('keydown', this._handleOnKeyPress);
    }
    _handleContextMenu = (event) => {
        event.preventDefault();
        this.setState({ visible: this.state.visible });
    }
    // _handleOnKeyPress = (event) => {
    //     event = (event || window.event);
    //         if (event.keyCode === 123) {
    //             event.preventDefault();
    //             event.returnValue = false;
    //         }
    // }
    handleStateChange(state) {
        this.setState({
            player: state
        });
    }
    play() {
        this.player.play();
    }
    pause() {
        this.player.pause();
    }
    
    render(){
        let poster = this.props.poster;
        //console.log(poster);
        return(
            <div className="videoArea">
                <Player
                    poster={poster}
                    ref={player => {
                        this.player = player;
                    }}
                    videoWidth={853}
                    videoHeight={480}
                    videoId="playerVideo1"
                    >
                    <BigPlayButton position="center" />
                    {/* <source src={this.state.source} /> */}
                    {/* <source src="https://vjs.zencdn.net/v/oceans.mp4?sd" type='video/mp4' label='SD' res='480' />
                    <source src="https://vjs.zencdn.net/v/oceans.mp4?hd" type='video/mp4' label='HD' res='1080'/> */}
                    {/* <source src="https://vjs.zencdn.net/v/oceans.mp4?phone" type='video/mp4' label='phone' res='144'/> */}
                    <source src="https://vjs.zencdn.net/v/oceans.mp4?4k" type='video/mp4' label='4k' res='2160'/>
                    <track
                        kind="captions"
                        //src="/assets/elephantsdream/captions.en.vtt"
                        srcLang="en"
                        label="English"
                        default
                    />
                    <track
                        kind="captions"
                        //src="/assets/elephantsdream/captions.sv.vtt"
                        srcLang="sv"
                        label="Swedish"
                    />
                    <track
                        kind="captions"
                        //src="/assets/elephantsdream/captions.ru.vtt"
                        srcLang="ru"
                        label="Russian"
                    />
                    <ControlBar autoHide={true}>
                        <ReplayControl seconds={15} order={1.1} />
                        <ForwardControl seconds={15} order={1.2} />
                        <ClosedCaptionButton order={7} />
                    </ControlBar>
                </Player>
            </div>
        );
    }
}

export default Video;