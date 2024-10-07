import { useState } from 'react';
import '../assets/scss/Contact.scss';

export default function Contact() {
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        message: ""
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]:event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {

        }
        catch(error) {

        }
    };

    return (
      <form className="container" onChange={handleSubmit}>
        <h1 className="form-title">Contact |</h1>
        <div className="form-content">
          <div className="form-input">
            <label className="form-label" htmlFor="Name">Nom |</label>
            <input
              className="form-input--box"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-input">
            <label className="form-label" htmlFor="Email">E-mail |</label>
            <input
              className="form-input--box"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-message">
            <label className="form-label" htmlFor='Message'>Message |</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-submit">
            <button className="form-submit--button" type="submit">
              Envoyer
            </button>
          </div>
        </div>
      </form>
    );
};