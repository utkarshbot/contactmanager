import React, { Component } from 'react'

export default class AddContact extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        }
        console.log(contact);
    };

    static defaultProps = {
        name:'utkarsh Rathore',
        email:"utkarsh@gmail.com",
        phone:"333-333-3-33-33"
    }
   
    render() {
        const { name, email, phone } = this.props;
        return (
            <div className = "card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit = {this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                            type = "text"
                            name = "name"
                            className="form-control form-control-lg"
                            placeholder="Enter Name"
                            defaultValue = {name}
                            ref = {this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Name</label>
                            <input
                            type = "email"
                            name = "email"
                            className="form-control form-control-lg"
                            placeholder="Enter email"
                            defaultValue = {email}
                            ref = {this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hone">Name</label>
                            <input
                            type = "text"
                            name = "phone"
                            className="form-control form-control-lg"
                            placeholder="Enter Phone"
                            defaultValue = {phone}
                            ref = {this.phoneInput}
                            />
                        </div>
                        <input 
                        type ="submit" 
                        value="Add Contact"
                        className="btn btn-danger btn-block"/>
                    </form>
                </div>
            </div>
        )
    }
}
