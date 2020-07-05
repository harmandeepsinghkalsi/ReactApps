import React from 'react';

class Toggle extends React.Component{
    render() {
      return (
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitches" onChange={this.props.onChange} checked={this.props.checkStatus} />
          <label class="custom-control-label" for="customSwitches">Label</label>
        </div>
      )
    }
  }

  export default Toggle;