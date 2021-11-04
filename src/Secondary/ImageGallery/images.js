import './images.css'
import image1 from './Images/image1.png'
import image2 from './Images/image2.jpg'
import image3 from './Images/image3.jpg'
import image4 from './Images/image4.jpg'
import image5 from './Images/image5.jpg'
import image6 from './Images/image6.jpg'
import image7 from './Images/image7.jpg'
import image8 from './Images/image8.jpg'
import image9 from './Images/image9.jpg'
import image10 from './Images/image10.jpg'
import image11 from './Images/image11.jpg'
import image12 from './Images/image12.jpg'
import image13 from './Images/image13.jpg'
import image14 from './Images/image14.jpg'
import image15 from './Images/image15.jpg'
import image16 from './Images/image16.jpg'
import image17 from './Images/image17.jpg'
import image18 from './Images/image18.jpg'
import image19 from './Images/image19.jpg'
import image20 from './Images/image20.jpg'
import image21 from './Images/image21.jpg'
import image22 from './Images/image22.jpg'
import image23 from './Images/image23.jpg'
import image24 from './Images/image24.jpg'
import image25 from './Images/image25.jpg'
import image26 from './Images/image26.jpg'
import image27 from './Images/image27.jpg'
import image28 from './Images/image28.png'

let ImageGallery = (props) => {
    return (
        <div id="imageGallery">
            <button id="closeButton" onClick={props.modalToggle}>X</button>
            <div id="images">
                <a href="https://www.youtube.com/watch?v=szNDQMM2pYw" rel="noreferrer" target="_blank"><img src={image28} alt="EMC V 90 first drive"></img></a>
                <a href={image23} rel="noreferrer" target="_blank"><img src={image23} alt="Wescoa at 2019 Silicon Valley Auto Show"></img></a>
                <a href={image1} rel="noreferrer" target="_blank"><img src={image1} alt="DOHC Redhead 3"></img></a>
                <a href={image2} rel="noreferrer" target="_blank"><img src={image2} alt="Wescoa Engine"></img></a>
                <a href={image3} rel="noreferrer" target="_blank"><img src={image3} alt="Wescoa Engine"></img></a>
                <a href={image4} rel="noreferrer" target="_blank"><img src={image4} alt="Wescoa Engine"></img></a>
                <a href={image5} rel="noreferrer" target="_blank"><img src={image5} alt="Wescoa Engine"></img></a>
                <a href={image6} rel="noreferrer" target="_blank"><img src={image6} alt="Wescoa Engine"></img></a>
                <a href={image7} rel="noreferrer" target="_blank"><img src={image7} alt="Wescoa Engine"></img></a>
                <a href={image8} rel="noreferrer" target="_blank"><img src={image8} alt="Wescoa Engine"></img></a>
                <a href={image9} rel="noreferrer" target="_blank"><img src={image9} alt="Wescoa Engine"></img></a>
                <a href={image10} rel="noreferrer" target="_blank"><img src={image10} alt="Wescoa Engine"></img></a>
                <a href={image11} rel="noreferrer" target="_blank"><img src={image11} alt="Wescoa Engine"></img></a>
                <a href={image12} rel="noreferrer" target="_blank"><img src={image12} alt="Wescoa Engine"></img></a>
                <a href={image13} rel="noreferrer" target="_blank"><img src={image13} alt="Wescoa Engine"></img></a>
                <a href={image14} rel="noreferrer" target="_blank"><img src={image14} alt="Wescoa Engine"></img></a>
                <a href={image15} rel="noreferrer" target="_blank"><img src={image15} alt="Wescoa Engine"></img></a>
                <a href={image16} rel="noreferrer" target="_blank"><img src={image16} alt="Wescoa Engine"></img></a>
                <a href={image17} rel="noreferrer" target="_blank"><img src={image17} alt="Wescoa Engine"></img></a>
                <a href={image18} rel="noreferrer" target="_blank"><img src={image18} alt="Wescoa Engine"></img></a>
                <a href={image19} rel="noreferrer" target="_blank"><img src={image19} alt="Wescoa Engine"></img></a>
                <a href={image20} rel="noreferrer" target="_blank"><img src={image20} alt="Wescoa Engine"></img></a>
                <a href={image21} rel="noreferrer" target="_blank"><img src={image21} alt="Wescoa Engine"></img></a>
                <a href={image22} rel="noreferrer" target="_blank"><img src={image22} alt="Wescoa Engine"></img></a>
                <a href={image24} rel="noreferrer" target="_blank"><img src={image24} alt="1956 Porsche Speedster with Wescoa Engine"></img></a>
                <a href={image25} rel="noreferrer" target="_blank"><img src={image25} alt="1956 Porsche Speedster with Wescoa Engine"></img></a>
                <a href={image26} rel="noreferrer" target="_blank"><img src={image26} alt="1956 Porsche Speedster with Wescoa Engine"></img></a>
                <a href={image27} rel="noreferrer" target="_blank"><img src={image27} alt="1956 Porsche Speedster with Wescoa Engine"></img></a>
            </div>
        </div>
    )
}

export default ImageGallery