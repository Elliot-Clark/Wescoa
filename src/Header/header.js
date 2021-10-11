import './header.css'
import logo from './logo.svg'

let header = () => {
    return (
        <div id="header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>Top</div>
            <div>Engine Comparisons</div>
            <div>Engine Specifications</div>
            <div>Contact</div>
        </div>
    )
}

export default header;