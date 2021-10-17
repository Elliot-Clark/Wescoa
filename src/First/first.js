import './first.css'
import enginePNG from './Engine1.png'
import engineSVG from './Engine1.svg'
import backgroundSVG from './Background.svg'



let First = () => {
    return (
        <div id="first">
            <img id="backgroundVector" src={backgroundSVG} alt="Background Vector"></img>
            <div id="leftFirst">
                <h1>The most <i>versatile</i> small engine family available anywhere</h1>
                Designed for unique applications
            </div>

            <div id="rightFirst">
                <img id="engineVector" src={engineSVG} alt="First Wescoa Engine Vector"></img>
                <img src={enginePNG} alt="First Wescoa Engine"></img>
            </div>
        </div>
    )
}

export default First