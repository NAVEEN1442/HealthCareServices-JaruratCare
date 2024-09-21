

import React, { useState } from 'react';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";


function App() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ name: '', description: '', price: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(null);

  // Add New Service
  const handleAddService = (e) => {
    e.preventDefault();
    if (!newService.name || !newService.description || !newService.price) {
      alert('Please fill all fields');
      return;
    }
    if (isEditing) {
      const updatedServices = services.map((service, index) =>
        index === currentServiceIndex ? newService : service
      );
      setServices(updatedServices);
      setIsEditing(false);
    } else {
      setServices([...services, newService]);
    }
    setNewService({ name: '', description: '', price: '' });
  };

  // Delete Service
  const handleDeleteService = (index) => {
    const filteredServices = services.filter((_, i) => i !== index);
    setServices(filteredServices);
  };

  // Edit Service
  const handleEditService = (index) => {
    setNewService(services[index]);
    setIsEditing(true);
    setCurrentServiceIndex(index);
  };

  // Handle Form Input Change
  const handleChange = (e) => {
    setNewService({ ...newService, [e.target.name]: e.target.value });
  };

  return (
    <div className="App p-6">
      <h1 className="text-2xl font-bold mb-6">Healthcare Services Management</h1>

      {/* Service List */}
      <ServiceList services={services} handleDeleteService={handleDeleteService} handleEditService={handleEditService} />

      {/* Add/Edit Service Form */}
      <ServiceForm
        newService={newService}
        handleAddService={handleAddService}
        handleChange={handleChange}
        isEditing={isEditing}
      />
    </div>
  );
}

// Service List Component
function ServiceList({ services, handleDeleteService, handleEditService }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Services List</h2>
      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index} className="p-4 border border-gray-300 rounded-lg shadow">
              <h3 className="text-lg font-bold">{service.name}</h3>
              <p>{service.description}</p>
              <p className=" flex items-center font-semibold"><RiMoneyRupeeCircleFill />{service.price}</p>
              <div className="flex space-x-2 mt-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => handleEditService(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDeleteService(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Add/Edit Service Form Component
function ServiceForm({ newService, handleAddService, handleChange, isEditing }) {
  return (
    <form onSubmit={handleAddService} className="mt-8 space-y-4">
      <div>
        <label className="block text-sm font-medium">Service Name</label>
        <input
          type="text"
          name="name"
          value={newService.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="Enter service name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Service Description</label>
        <input
          type="text"
          name="description"
          value={newService.description}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="Enter service description"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Price</label>
        <input
          type="number"
          name="price"
          value={newService.price}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="Enter service price"
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {isEditing ? 'Update Service' : 'Add Service'}
      </button>
    </form>
  );
}

export default App;
