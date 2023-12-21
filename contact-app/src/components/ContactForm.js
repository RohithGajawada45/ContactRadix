import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
  });
  const [savedContacts, setSavedContacts] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedContacts([...savedContacts, formData]);
    setFormData({ name: '', email: '', phoneNumber: '', address: '' });
    setOpen(false);
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', phoneNumber: '', address: '' });
    setOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Add Contact
      </button>

      <Dialog open={open} onClose={setOpen}>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mt-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div className="mt-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div className="mt-2">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div className="mt-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button type="submit" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md">
                Save
              </button>
            </div>
          </form>
        </div>
      </Dialog>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Saved Contacts:</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          {savedContacts.map((contact, index) => (
            <div key={index} className="mb-4 p-2 border border-gray-300 rounded-md">
              <p className="font-semibold">{contact.name}</p>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phoneNumber}</p>
              <p>Address: {contact.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
