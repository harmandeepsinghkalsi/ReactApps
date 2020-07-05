import React from 'react';
import Toggle from './toggle';

class Card extends React.Component {

    constructor(props) {
      super(props);
    
      this.state = {
        checked: false,
      }
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange () {
      this.setState({
        checked: !this.state.checked,
      });
    }
    
    render() {

      return (
          <div class="card" key={this.props.index}>
            <div class="card-body">
              <h5 class="card-title">{this.props.title}</h5>
              <p class="card-text">Text</p>
            </div>
            <div class="cardfooter">
              <Toggle checkStatus={this.state.checked} onChange={this.handleChange} key={this.props.index} />
            </div>
          </div>
    
      );
    }
}

export default Card;

