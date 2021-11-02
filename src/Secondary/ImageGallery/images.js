import React, { Component } from "react";
import './images.css'
import image1 from './Images/image1.png'
import image2 from './Images/image2.jpg'
import image3 from './Images/image3.jpg'


class ImageGallery extends Component {
    state = {
        modal: false,
    }

    render() {
        return (
            <div id="imageGallery">
                <div id="modal">
                    <button id="closeButton">X</button>
                    <div id="images">
                        <img src={image1} alt="DOHC Redhead 3"></img>
                        <img src={image2} alt="Wescoa Engine"></img>
                        <img src={image3} alt="Wescoa Engine"></img>

                    </div>
                </div>
            </div>
        )
    }
}

export default ImageGallery