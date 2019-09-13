import React, {Component} from 'react';
import Wizard from '../Wizard';
import {Link} from 'react-router-dom';
import './steps_css/Step3.css'
// import axios from 'axios';


export default class WizardStep3 extends Component{
    render(){
        return(
            <>
                <Wizard/>
                <div className="step-3-main">
                    <section className="step-3-info">
                        <h1>Recommended Rent: $0</h1>
                        <h1>Mortgage Price: </h1>
                        <input></input>
                        <h1>Rent Price: </h1>
                        <input></input>
                    </section>
                    <section className='step-3-buttons'>
                        <Link to="/wizard/step2"><button className="next-button-3">Prev</button></Link>
                        <Link to="/"><button className="next-button-3-2">Complete</button></Link>
                    </section>
                </div>
            </>
        )
    }
}