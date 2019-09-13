import React, {Component} from 'react';
import axios from 'axios';
import './Dashboard.css'

//components
import House from '../House/House';




export default class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }
    
    componentDidMount(){
        axios
        .get('/api/houses')
        .then(response => {
            this.setState({
                houses: response.data
            })
        })
    }


    render(){
        return(
            <div className='dash-container'>
                <section className="section-1">
                    <h1>Dashboard</h1>
                    <button>Add New Property</button>
                </section>
                <section className="section-2">
                    <House houses={this.state.houses}/>
                </section>
            </div>
        )
    }
}