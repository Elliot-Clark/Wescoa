import './tertiary.css'
import Wescoa from './images/Wescoa.png'
import FordEcoboost from './images/Ford Ecoboost.png'
import Honda from './images/Honda.png'
import GMVauxhall from './images/GM Vauxhall.png'
import BMW from './images/BMW.png'

let Tertiary = () => {
    return (
        <div id="tertiary">
            <div id="table">
                <tbody>
                    <tr>
                        <th>Engine Comparisons</th>
                        <th>Wescoa V2-90</th>
                        <th>Ford Ecoboost</th>
                        <th>Honda</th>
                        <th>GM Vauxhall</th>
                        <th>BMW 2017 Engine Family</th>
                    </tr>
                    <tr className="table-horsepower">
                        <td className="table-row-name">Horsepower/Lbs.</td>
                        <td>2.0 (smallest footprint)</td>
                        <td>0.6</td>
                        <td>0.63</td>
                        <td>0.051</td>
                        <td>.623/.84</td>
                    </tr>
                    <tr className="table-horsepower">
                        <td className="table-row-name">Horsepower/Cubic Inch</td>
                        <td>3.2</td>
                        <td>2.0</td>
                        <td>2.4</td>
                        <td>1.7</td>
                        <td>1.4/1.57</td>
                    </tr>
                    <tr>
                        <td className="table-row-name">Engine Type</td>
                        <td>Gas 4 Cycle</td>
                        <td>Gas 4 Cycle</td>
                        <td>Gas 4 Cycle</td>
                        <td>Gas 4 Cycle</td>
                        <td>Gas 4 Cycle</td>
                    </tr>
                    <tr>
                        <td className="table-row-name">Fuel</td>
                        <td>Gas, NG, CNG</td>
                        <td>Gas</td>
                        <td>Gas</td>
                        <td>Gas</td>
                        <td>Gas</td>
                    </tr>
                    <tr>
                        <td className="table-row-name">Power</td>
                        <td>200 HP/150kw</td>
                        <td>125 HP/92kw</td>
                        <td>127 HP/95.2kw</td>
                        <td>103 HP/77.2kw</td>
                        <td>134 HP/100 kw-189 HP/142 kw</td>
                    </tr>
                    <tr>
                        <td className="table-row-name">Torque</td>
                        <td>170</td>
                        <td>145</td>
                        <td>147</td>
                        <td>125</td>
                        <td>170/207</td>
                    </tr>
                    <tr>
                        <td className="table-row-name">Configuration</td>
                        <td>90 Degree V Twin</td>
                        <td>Inline 3 Cylinder</td>
                        <td>Inline 3 Cylinder</td>
                        <td>Inline 3 Cylinder</td>
                        <td>Inline 3 &amp; 4 Cylinder</td>
                    </tr>
                    <tr>
                        <td className="table-row-name">Displacement</td>
                        <td>1 liter</td>
                        <td>1 liter</td>
                        <td>1 liter</td>
                        <td>1 liter</td>
                        <td>1/5/2.0 liter</td>
                    </tr>
                    <tr>
                        <td className="table-row-name">Aspiration</td>
                        <td>Turbocharger</td>
                        <td>Turbocharger</td>
                        <td>Turbocharger</td>
                        <td>Turbocharger</td>
                        <td>Turbocharged</td>
                    </tr>
                    <tr>
                        <td className="table-row-name">Combustion System</td>
                        <td>Direct Injection</td>
                        <td>Direct Injection</td>
                        <td>Direct Injection</td>
                        <td>Direct Injection</td>
                        <td>Direct Injection</td>
                    </tr>
                    <tr>
                        <td className="table-row-name">Dry Weight</td>
                        <td>100 lbs</td>
                        <td>215 lbs</td>
                        <td>Est. 200 lbs</td>
                        <td>Est. 200 lbs</td>
                        <td>Est. 215/225 lbs</td>
                    </tr>
                    <tr id="table-images">
                        <td></td>
                        <td><img src={Wescoa} alt="Wescoa Engine"></img></td>
                        <td><img src={FordEcoboost} alt="Ford Ecoboost Engine"></img></td>
                        <td><img src={Honda} alt="Honda Engine"></img></td>
                        <td><img src={GMVauxhall} alt="GM Vauxhall Engine"></img></td>
                        <td><img src={BMW} alt="BMW Engine"></img></td>
                    </tr>
                </tbody>
            </div>
        </div>
    )
}

export default Tertiary