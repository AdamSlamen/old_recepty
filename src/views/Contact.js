import React from 'react';

function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-4">
          <strong>Address:</strong><br />
          456 Culinary Avenue<br />
          Gourmet Town, 1010 Vienna<br />
          Austria
        </p>
        <p className="mb-4">
          <strong>Email:</strong><br />
          info@dishdelights.com
        </p>
        <p className="mb-4">
          <strong>Phone:</strong><br />
          +43 1 234 5678
        </p>
      </div>
    </div>
  );
}

export default Contact;
