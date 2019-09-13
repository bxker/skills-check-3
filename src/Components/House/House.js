import React, {Component} from 'react';


export default class House extends Component{
    render(){
        return(
                <div className="house-card">
                    <section>
                        <img src='' alt='house-img'></img>
                    </section>
                    <section>
                        <h2>Property Name:</h2>
                        <h2>Address:</h2>
                        <h2>City:</h2>
                        <h2>State:</h2>
                        <h2>Zip:</h2>
                    </section>
                    <section>
                        <h2>Monthly Mortgage:</h2>
                        <h2>Desired Rent:</h2>
                    </section>
                </div>
        )
    }
}