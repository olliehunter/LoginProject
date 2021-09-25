import React, { Component } from 'react'

class StudentPage extends Component {

    constructor(props) {
        super(props)
    
             this.state = {
                 message : 'send a message!'
             }
        
    }
    
    render() {
        return (
            <div>
                <h2>Student Page</h2>

                <form>
      <textarea value={this.state.message} />
                </form>
                <button>send</button>
            </div>
        );
    }
}

export default StudentPage
