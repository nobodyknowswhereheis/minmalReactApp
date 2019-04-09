import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name:"",
            last_name:"",
            email:"",
            phone:""
        };
      }
    submit= function(data) {
        var response = setTimeout(function() {
          var response = "<strong>Thank you for your contacting us!</strong> Your info has been saved successfully!"

      
        }, 2000);
      
      }
      doSubmit= function() {
        var data = {}; 
        this.submit(data);
      
      }
      handleChange = function(event){
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        console.log(event.target.id)
      }
    
    render() {
        return (
            <div>
                <form action="Javascript:doSubmit()">
                <div className="grid-wrapper">

                    <div className="grid-col-1">

                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text"  className="form-control" id="first_name" placeholder="Mickey" value={this.state.first_name} onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email"  className="form-control" id="email" placeholder="Mickey.Mouse@magic.com" value={this.state.email} />
                        </div>
                    </div>
                    <div className="grid-col-2">

                        <div className="form-group">
                            <label htmlFor="last_name">Last name</label>
                            <input type="text" className="form-control" id="last_name" placeholder="Mouse" value={this.state.last_name} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel"  className="form-control" id="phone" placeholder="(123) 456-7890" value={this.state.phone} />
                        </div>
                    </div>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary start" id="submit" onClick={this.doSubmit()}>
                        <span>Submit</span>
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;
