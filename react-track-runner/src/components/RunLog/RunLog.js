import React, { Component } from 'react';

class Run extends Component {
    state = {
        milesRan: 0,
        miles: 0,
        mostMiles: 0,
    };


    handleChange = (event) => {
        console.log('handle change was called');
        console.log(event.target.value);
      this.setState({
          milesRan: Number(event.target.value)
      })
    }

    handleClick = () =>{
        console.log('button has been clicked');
        
        if (this.state.milesRan > this.state.mostMiles) {

            this.setState({
                ...this.state,
                miles: this.state.milesRan,
                mostMiles: this.state.milesRan,
            })
        }//end if statement
        else  {

            this.setState({
                ...this.state,
                miles: this.state.milesRan,
            })
        }//end else if

    }

    render() {
        return (
            <div>
                <input
                    placeholder="Miles Ran"
                    type="text"
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Add New Run</button>
                <div>
                    Recent Run: {this.state.miles}
                </div>
                <div>
                    Longest Run: {this.state.mostMiles}
                </div>
            </div>

        )

    }
}

export default Run;