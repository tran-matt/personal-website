import React, { useState } from 'react';
// Import EmailJS
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log('Form data updated');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);

    // Prepare the form data for EmailJS
    const form = e.currentTarget;
    emailjs.sendForm('service_h8iika6', 'template_qnr7pxw', form, 'LV9RL1SeHhQpzegjl')
      .then((result) => {
          console.log('Email sent successfully', result.text);
          alert('Your mail is sent!');
      }, (error) => {
          console.error('Failed to send email', error.text);
          alert('Oops... ' + JSON.stringify(error));
      });

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Me</h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your Name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email Address"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Subject"
                onChange={handleChange}
                value={formData.subject}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your message"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
