import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Wizard from '../Wizard';
import './steps_css/Step1.css'
// import axios from 'axios';


export default class WizardStep1 extends Component{
    render(){
        return(
            <>
                <Wizard />
                <div className="step-1-main">
                    <section className='step-1-info'>
                        <h1>Property Name</h1>
                        <input type="text"></input>
                        <h1>Address</h1>
                        <input type="text"></input>
                        <div className="location">
                            <h1>City</h1>
                            <input type="text"></input>
                            <h1>State</h1>
                            <input type="text"></input>
                            <h1>Zip</h1>
                            <input type="text"></input>
                        </div>
                    </section>
                    <section className='step-1-buttons'>
                        <Link to="/"><button className="next-button-1">Prev</button></Link>
                        <Link to="/wizard/step2"><button className="next-button-1">Next Step</button></Link>
                    </section>
                </div>
            </>
        )
    }
}