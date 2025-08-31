import React, { useState, useEffect } from 'react';
import { FaPlus, FaTrash, FaSave, FaPlane, FaHotel, FaUmbrellaBeach, FaDollarSign, FaCalendar } from 'react-icons/fa';

const ItineraryBuilder = () => {
  // Load from localStorage on component mount
  const [itinerary, setItinerary] = useState(() => {
    const savedItinerary = localStorage.getItem('travelItinerary');
    return savedItinerary ? JSON.parse(savedItinerary) : {
      title: 'My Dream Vacation',
      trips: [],
      totalCost: 0
    };
  });

  const [newItem, setNewItem] = useState({
    type: 'activity',
    name: '',
    date: '',
    time: '',
    cost: '',
    notes: ''
  });

  // Save to localStorage whenever itinerary changes
  useEffect(() => {
    localStorage.setItem('travelItinerary', JSON.stringify(itinerary));
  }, [itinerary]);

  const addItem = () => {
    if (newItem.name.trim() && newItem.date) {
      const cost = parseFloat(newItem.cost) || 0;
      const newTripItem = {
        id: Date.now(),
        type: newItem.type,
        name: newItem.name,
        date: newItem.date,
        time: newItem.time,
        cost: cost,
        notes: newItem.notes
      };

      setItinerary(prev => ({
        ...prev,
        trips: [...prev.trips, newTripItem],
        totalCost: prev.totalCost + cost
      }));

      // Reset form
      setNewItem({
        type: 'activity',
        name: '',
        date: '',
        time: '',
        cost: '',
        notes: ''
      });
    }
  };

  const removeItem = (id) => {
    const itemToRemove = itinerary.trips.find(item => item.id === id);
    setItinerary(prev => ({
      ...prev,
      trips: prev.trips.filter(item => item.id !== id),
      totalCost: prev.totalCost - (itemToRemove?.cost || 0)
    }));
  };

  const clearItinerary = () => {
    if (window.confirm('Are you sure you want to clear your entire itinerary?')) {
      setItinerary({
        title: 'My Dream Vacation',
        trips: [],
        totalCost: 0
      });
    }
  };

  const getIconForType = (type) => {
    switch (type) {
      case 'flight': return <FaPlane className="text-blue-500 text-lg" />;
      case 'hotel': return <FaHotel className="text-green-500 text-lg" />;
      case 'activity': return <FaUmbrellaBeach className="text-purple-500 text-lg" />;
      default: return <FaUmbrellaBeach className="text-gray-500 text-lg" />;
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'flight': return 'Flight';
      case 'hotel': return 'Hotel';
      case 'activity': return 'Activity';
      default: return 'Item';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Build Your Itinerary</h2>
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold text-cyan-600">
              Total: ${itinerary.totalCost.toFixed(2)}
            </span>
            <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-cyan-700 transition-colors">
              <FaSave className="mr-2" /> Save Plan
            </button>
            {itinerary.trips.length > 0 && (
              <button 
                onClick={clearItinerary}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
        
        <input
          type="text"
          placeholder="Trip Title (e.g., 'Summer Europe Trip')"
          value={itinerary.title}
          onChange={(e) => setItinerary({...itinerary, title: e.target.value})}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-300 focus:border-transparent"
        />
      </div>

      {/* Add New Item Form */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">➕ Add New Item</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <select 
            value={newItem.type}
            onChange={(e) => setNewItem({...newItem, type: e.target.value})}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-300"
          >
            <option value="activity">Activity</option>
            <option value="flight">Flight</option>
            <option value="hotel">Hotel</option>
          </select>
          
          <input
            type="text"
            placeholder="Item name"
            value={newItem.name}
            onChange={(e) => setNewItem({...newItem, name: e.target.value})}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-300"
          />
          
          <input
            type="date"
            value={newItem.date}
            onChange={(e) => setNewItem({...newItem, date: e.target.value})}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-300"
          />
          
          <input
            type="time"
            value={newItem.time}
            onChange={(e) => setNewItem({...newItem, time: e.target.value})}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-300"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <FaDollarSign className="text-gray-400 mr-2" />
            <input
              type="number"
              placeholder="Cost"
              value={newItem.cost}
              onChange={(e) => setNewItem({...newItem, cost: e.target.value})}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-300"
            />
          </div>
          
          <input
            type="text"
            placeholder="Notes (optional)"
            value={newItem.notes}
            onChange={(e) => setNewItem({...newItem, notes: e.target.value})}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-300"
          />
        </div>

        <button 
          onClick={addItem}
          className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors flex items-center w-full justify-center"
        >
          <FaPlus className="mr-2" /> Add to Itinerary
        </button>
      </div>

      {/* Itinerary Items */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">📅 Your Itinerary Items</h3>
        
        {itinerary.trips.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <div className="text-6xl mb-4">📋</div>
            <p className="text-lg mb-2">Your itinerary is empty</p>
            <p className="text-sm">Start adding items using the form above!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {itinerary.trips.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-3">
                    {getIconForType(item.type)}
                    <div>
                      <span className="font-semibold text-gray-800">{item.name}</span>
                      <span className="ml-3 text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {getTypeLabel(item.type)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {item.cost > 0 && (
                      <span className="text-green-600 font-semibold">${item.cost.toFixed(2)}</span>
                    )}
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                  {item.date && (
                    <div className="flex items-center">
                      <FaCalendar className="mr-2 text-gray-400" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                      {item.time && <span className="ml-2">at {item.time}</span>}
                    </div>
                  )}
                  
                  {item.notes && (
                    <div className="md:col-span-2">
                      <span className="text-gray-400">Note: </span>
                      {item.notes}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Summary */}
        {itinerary.trips.length > 0 && (
          <div className="mt-6 p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-cyan-800">Total Estimated Cost:</span>
              <span className="text-2xl font-bold text-cyan-600">${itinerary.totalCost.toFixed(2)}</span>
            </div>
            <div className="text-sm text-cyan-700 mt-1">
              {itinerary.trips.length} items in your itinerary • 
              Saved automatically ✅
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItineraryBuilder;