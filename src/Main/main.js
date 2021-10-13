import './main.css'
import picture from './Engine1.png'

let Main = () => {
    return (
        <div id="main">
            <div id="leftMain">
                <h1>The most versatile small engine family available anywhere</h1>
                Designed for unique applications
            </div>

            <div id="rightMain">
                <img src={picture} alt="First Wescoa Engine"></img>
            </div>
        </div>
    )
}

export default Main