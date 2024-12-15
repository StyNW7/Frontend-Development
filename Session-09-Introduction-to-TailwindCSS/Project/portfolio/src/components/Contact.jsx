import React, { useState } from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here
  }

  return (

    <section id="contact" className="bg-white py-16 px-8">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-gray-800">Contact</h2>

        <form onSubmit={handleSubmit} className="mt-8">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full px-4 py-2 border rounded-lg mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full px-4 py-2 border rounded-lg mb-4"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="block w-full px-4 py-2 border rounded-lg mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Send Message</button>
        </form>

      </div>

    </section>

  );
  
}

export default Contact;