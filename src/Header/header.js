import './header.css'
import logo from './logo.svg'

let header = () => {
    return (
        <div id="header">
            <div id="headerLeft">
                <img src={logo} className="App-logo" alt="logo" />
                <div><a href="/">Wescoa Motors</a></div>
            </div>
            
            <div id="headerRight">
                <div>Engine Comparisons</div>
                <div>Engine Specifications</div>
                <div>Contact</div>
            </div>
        </div>
    )
}

export default header;