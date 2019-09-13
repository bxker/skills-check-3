import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './steps_css/Step2.css';
import Wizard from '../Wizard'
// import axios from 'axios';


export default class WizardStep2 extends Component{
    render(){
        return(
            <>
                <Wizard/>
                <div className="step-2-main">
                    <section className="step-2-info">
                        <h1>Image URL: </h1>
                        <input></input>
                    </section>
                    <section className='step-2-buttons'>
                        <Link to="/wizard/step1"><button className="next-button-2">Prev</button></Link>
                        <Link to="/wizard/step3"><button className="next-button-2">Next Step</button></Link>
                    </section>
                </div>
            </>
        )
    }
}