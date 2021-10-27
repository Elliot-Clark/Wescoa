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
                <div><a href="#secondary">The Company</a></div>
                <div><a href="#tertiary">Engine Comparisons</a></div>
                <div><a href="#forth">Engine Specifications</a></div>
                <div><a href="#fifth">Contact</a></div>
            </div>
        </div>
    )
}

export default header;