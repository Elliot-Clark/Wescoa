import { Component } from "react";
import './secondary.css'
import secondaryImage1 from './V2-90 Motorcycle.jpg'
import ImageGallery from './ImageGallery/images.js'

class Secondary extends Component {
    state = {
        modal: false
    }

    modalToggle = () => {
        if (this.state.modal) {
            this.setState({ modal: false});
        } else {
            this.setState({modal: true});
        }
    }

    render() {
        return (
            <div id="secondary">
                <div id="secondaryWrapper">
                    <h2>Wescoa Engine Technology Inc.</h2>
    
                    <div id="secondaryTextWrapper">
                        <div id="topLeftSecondary">
                            <p>
                                WET (“Wescoa” or the “Company”) was formed in 2004 under the laws of California in order to design,
                                produce and market state of the art lightweight high performance 4-stroke engines for 
                                commercial / recreational vehicles and other consumer applications that outperform “standards” 
                                for emissions, efficiency and fuel economy.
                            </p>
                        </div>
                        
                        <br></br>
                        <p id="topRightSecondary">
                            The company engaged world class talent to develop this family of V2-90 internal combustion engines,
                            which, were designed as the heart of the new hybrid power trains that will be utilized in further vehicles
                            as well as the primary power source for smaller non-hybrid vehicles.
                        </p>
                    </div>
    
                    <h2 id="normalTitle">The Wescoa Mission:</h2>
    
                    <div id="secondaryImageWrapper">
                        <div id="bottomLeftSecondary">
                            <img src={secondaryImage1} alt="V2-90 Wescoa Engine Motorcycle"></img>
                        </div>
                        <h2 id="responsiveTitle">The Wescoa Mission:</h2>
                        <div id="bottomRightSecondary">
                            <ul>To promote and sell advanced engine technology</ul>
                            <ul>Develop patent and leading edge technology for such engines</ul>
                            <ul>License proprietary technology to major producers for global markets</ul>
                            <button id="imageGalleryButton" onClick={this.modalToggle}>Wescoa Image Gallery →</button>
                            {this.state.modal ? 
                                <ImageGallery
                                modalToggle = {this.modalToggle}
                                />
                            : 
                                ''
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Secondary