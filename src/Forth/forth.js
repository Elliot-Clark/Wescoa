import './forth.css'
import graphImage from './Power Curve790.png'

let Forth = () => {
    return (
        <div id="forth">
            <div id="forthUpperWrapper">
                <div id="forthUpperLeftWrapper">
                    <h1>WET-V2-90 Power Module</h1>
                    <p>V2-90 Engine: High performance, light weight, small, excellent mileage.</p>
                    <ul>
                        <li>Engine family, displacement: 750-1200 cc</li>
                        <li>Horsepower: 80-200hp</li>
                        <li>High Fuel Efficiency</li>
                        <li>Weight: &lt;100 lbs</li>
                        <li>2 cylinder, 50% fewer parts</li>
                        <li>Works on gas (petrol), natural gas/CNG</li>
                        <li>Width: 10½ inches</li>
                    </ul>
                </div>
                <div id="forthUpperRightWrapper">
                    <table>
                        <tbody>
                            <tr>
                                <th>Bore</th>
                                <th>64.5mm Stroke</th>
                                <th>75 mm Stroke</th>
                                <th>84.5mm Stroke</th>
                            </tr>
                            <tr>
                                <td>88mm Bore</td>
                                <td>749cc</td>
                                <td>871cc</td>
                                <td>981cc</td>
                            </tr>
                            <tr>
                                <td>92mm Bore</td>
                                <td>857cc</td>
                                <td>997cc</td>
                                <td>1123cc</td>
                            </tr>
                            <tr>
                                <td>95mm Bore</td>
                                <td>914cc</td>
                                <td>1063cc</td>
                                <td>1197cc</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div id="forthMiddleWrapper">
                <h1>Features</h1>
                <p>The family of V2/90 V twins has the following features:</p>
                <ol>
                    <li>Designed to provide high fuel efficiency when powering a small two passenger vehicle.</li>
                    <li>Great flexibility in configuration.</li>
                    <li>One head fits both cylinders, the head is configured to be fitted as a single overhead cam with hydraulic lifters, or for higher performance applications, double overhead cams with solid lifters.</li>
                    <li>All camshafts are chain driven, this is accomplished by transfer shafts running through the cases, these shafts will also accommodate cassette balance modules.</li>
                    <li>The 90 degree V is a balanced design, but the crankshaft can be configured for different firing sequences, if this feature is utilized the balance modules are needed.</li>
                    <li>The head is a very efficient design that flows in excess of 300 cfm on a flow bench, a very high number indicating the considerable potential performance of the engine, thus providing very high fuel economy.</li>
                </ol>
            </div>
            

            <div id="forthBottomWrapper">
                <h1>Applications</h1>
                <p>The engine can be used in numerous applications:</p>
                <div id="forthBottomWrapperLower">
                    <div id="forthBottomWrapperLeft">
                        <a rel="noreferrer" target="_blank" href={graphImage}><img src={graphImage} alt="Wescoa V2 Preliminary Perforamnce Graph"></img></a>
                    </div>
                    <div id="forthBotthWrapperRight">
                        <ul>
                            <li>UTV’s</li>
                            <li>ATV’s</li>
                            <li>Hybrid drivetrain</li>
                            <li>Range extender for EV's</li>
                            <li>Snowmobiles</li>
                            <li>Watercraft</li>
                            <li>Motorcycles</li>
                            <li>Ultra Light Aircraft</li>
                            <li>Hybrid Propulsion Engines</li>
                            <li>Mini cars and trucks of all types</li>
                            <li>Generators</li>
                            <li>Mobile pumps</li>
                            <li>Lawn &amp; Garden equipment</li>
                        </ul>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Forth
