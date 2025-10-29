import React from 'react';
import FormInput from '../components/FormInput';
import { UploadCloudIcon, CheckIcon } from '../components/icons';

const AdminAddCarPage = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Add New Car</h1>
        <p className="text-slate-500 mt-1">
          Fill in details to list a new car for booking, including pricing, availability, and car specifications.
        </p>
      </div>

      <form>
        {/* Image Upload */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <label htmlFor="car-image-upload" className="cursor-pointer">
                <div className="w-32 h-24 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors">
                <UploadCloudIcon className="w-8 h-8" />
                <span className="text-xs mt-1">Upload</span>
                </div>
            </label>
            <p className="text-sm text-slate-500">Upload a picture of your car</p>
          </div>
          <input type="file" className="hidden" id="car-image-upload" />
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormInput label="Brand" id="brand" type="text" placeholder="e.g. BMW, Mercedes, Audi..." />
          <FormInput label="Model" id="model" type="text" placeholder="e.g. X5, E-Class, M4..." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <FormInput label="Year" id="year" type="number" placeholder="2025" defaultValue="2025" />
          <FormInput label="Daily Price ($)" id="price" type="number" placeholder="100" />
          <FormInput label="Category" id="category" type="text" placeholder="Sedan" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <FormInput label="Transmission" id="transmission" type="text" placeholder="Automatic" />
          <FormInput label="Fuel Type" id="fuel" type="text" placeholder="Diesel" />
          <FormInput label="Seating Capacity" id="seats" type="number" placeholder="5" />
        </div>
        
        <div className="mb-6">
            <FormInput label="Location" id="location" type="text" placeholder="eg. San Francisco, CA" />
        </div>

        <div className="mb-8">
          <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            placeholder="Describe your car, its condition, and any notable details..."
            className="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <CheckIcon className="w-5 h-5" />
            <span>List Your Car</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddCarPage;
