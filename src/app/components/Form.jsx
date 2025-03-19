"use client";

import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        queryType: "",
        terms: false,
        error: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message, queryType, terms } = this.state;
    
    if (!firstName || !lastName || !email || !message || !queryType || !terms) {
      this.setState({ error: "Todos os campos são obrigatórios!" });
    } else {
      // Exibe os dados no console
      console.log("Form Data:", { firstName, lastName, email, message, queryType, terms });
      
      // Limpa os campos
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        queryType: "",
        terms: false,
        error: "",
      });
  
      alert("Mensagem enviada com sucesso!");
    }
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { firstName, lastName, email, message, queryType, terms, error } = this.state;
    return (
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-rigth mb-6 text-gray-500">Contact Us</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={this.handleSubmit}>

          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                type="text"
                id="first-name"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
                required
                />
            </div>
            
            <div className="flex-1">
           <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleChange}
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
                    required
                   />
            </div>
           

          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Adress</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              required
            />
           
          </div>

          <div className="mb-4">
         <label className="block text-sm font-medium text-gray-700">Query Type</label>
         <div className="flex space-x-4">
        <div className="flex items-center w-full p-3 mt-1 border border-gray-300 rounded-lg">
        <input
        type="radio"
        id="general"
        name="queryType"
        value="general"
        onChange={this.handleChange}
       className="mr-2"
      />
      <label htmlFor="oi" className="text-sm text-gray-700">General Enquiry</label>
    </div>

    <div className="flex items-center w-full p-3 mt-1 border border-gray-300 rounded-lg">
      <input
        type="radio"
        id="support"
        name="queryType"
        value="support"
        onChange={this.handleChange}
        className="mr-2"
      />
      <label htmlFor="olá" className="text-sm text-gray-700">Support Request</label>
    </div>
  </div>
</div>


          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensage</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={this.handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              onChange={this.handleChange}
              className="mr-2"
              required
            />
            <span>I consent to being contacted by the team</span>
          </div>
          <button type="submit" className="w-full py-2 bg-green-800 text-white rounded-lg">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
