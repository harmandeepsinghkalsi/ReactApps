import React, { Component } from 'react'

class Form extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             comments:'',
             topic:'react'
        }
    }

    handleChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
    }
    
    render() {
        return (
            <div>
                <h1>Form Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input value={this.state.userName} type="text" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
