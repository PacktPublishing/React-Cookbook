  import React, { Component } from 'react';
  import './Person.css';

  class Person extends Component {
    constructor() {
      super();

      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        errors: {
          firstName: false,
          lastName: false
        }
      };
    }

    handleOnChange = e => {
      const { target: { value, name } } = e;

      this.setState({
        [name]: value
      });
    }

    handleOnSubmit = e => {
      // The e.preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event won't occur.
      e.preventDefault();

      const { firstName, lastName, email, phone } = this.state;

      // If firstName or lastName is missing we add an error class
      this.setState({
        errors: {
          firstName: firstName === '',
          lastName: lastName === ''
        }
      });

      const data = {
        firstName,
        lastName,
        email,
        phone
      };

      // Once we have the data collected we can call a Redux Action or process the data as we need it.
      console.log('Data:', data);
    }

    render() {
      return (
        <div className="Person">
          <form onSubmit={this.handleOnSubmit}>
            <div>
              <p><strong>First Name:</strong></p>
              <p>
                <input
                  name="firstName"
                  type="text"
                  value={this.state.firstName}
                  onChange={this.handleOnChange}
                  className={this.state.errors.firstName ? 'error' : ''}
                />
                {this.state.errors.firstName && <div className="errorMessage">Required field</div>}
              </p>
            </div>

            <div>
              <p><strong>Last Name:</strong></p>
              <p>
                <input
                  name="lastName"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.handleOnChange}
                  className={this.state.errors.lastName ? 'error' : ''}
                />
                {this.state.errors.lastName && <div className="errorMessage">Required field</div>}
              </p>
            </div>

            <div>
              <p><strong>Email:</strong></p>
              <p>
                <input name="email" type="email" value={this.state.email} onChange={this.handleOnChange} />
              </p>
            </div>

            <div>
              <p><strong>Phone:</strong></p>
              <p>
                <input name="phone" type="tel" value={this.state.phone} onChange={this.handleOnChange} />
              </p>
            </div>

            <p>
              <button>Save Information</button>
            </p>
          </form>
        </div>
      );
    }
  }

  export default Person;
