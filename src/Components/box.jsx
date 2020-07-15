import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div className="card my-4" >
                <div className="card-header">make a box</div>
                <div className="card-body"style={{backgroundColor:this.props.color}}>
                    {this.props.color}


                </div>
            </div>

        )
    }
}

export default Box;