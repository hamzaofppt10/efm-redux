import React, { useState } from 'react';

const App = () => {
  const [worker, setWorker] = useState({
    code: '',
    marque: '',
    date: '',
    categorie: '',
  });

  const [submittedWorker, setSubmittedWorker] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorker({
      ...worker,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedWorker(worker);
    // Reset form
    setWorker({
      code: '',
      marque: '',
      date: '',
      categorie: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Add Worker</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Code:</label>
            <input
              type="number"
              name="code"
              value={worker.code}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Marque:</label>
            <select
              name="marque"
              value={worker.marque}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            >
              <option value="">Select a brand</option>
              <option value="Dell">Dell</option>
              <option value="HP">HP</option>
              <option value="Lenovo">Lenovo</option>
              <option value="Apple">Apple</option>
              <option value="Asus">Asus</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date of First Using:</label>
            <input
              type="date"
              name="date"
              value={worker.date}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Categorie:</label>
            <input
              type="text"
              name="categorie"
              value={worker.categorie}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Worker
          </button>
        </form>
        {submittedWorker && (
          <div className="mt-6 p-4 bg-gray-200 rounded">
            <h2 className="text-xl font-bold mb-4">Submitted Worker Details</h2>
            <p><strong>Code:</strong> {submittedWorker.code}</p>
            <p><strong>Marque:</strong> {submittedWorker.marque}</p>
            <p><strong>Date of First Using:</strong> {submittedWorker.date}</p>
            <p><strong>Categorie:</strong> {submittedWorker.categorie}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;