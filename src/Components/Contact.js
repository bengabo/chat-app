import React from 'react';
import './Contact.css';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }
render() {
  return (
    <div className="Contact">
        <img className="avatar" src={this.props.avatar}/>
        <div className="text">
          <p className="name">{this.props.name}</p>

          <div className="status"
            onClick={event => {
              const newStatus = !this.state.status;
              this.setState({status: newStatus});
            }}>
              {this.state.status ? (
              <span className="status-online"></span>
              )  : (
              <span className="status-offline"></span>
              )}
              <span className="status-text">
                {this.state.status ? "Je suis là" : "Plus là!"}
              </span>
          </div>
        </div>

    </div>
  );
}
}

export default Contact;
