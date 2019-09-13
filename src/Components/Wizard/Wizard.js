import React, {Component} from 'react';
import '../Wizard/Wizard.css'
// import axios from 'axios';


export default class Wizard extends Component{
    clearReduxState(){
        
    }
    render(){
        return(
            <section className="wizard-new-list">
                <h1>Add New Listing</h1>
                <button onClick={this.clearReduxState}>Cancel</button>
            </section>
        )
    }
}