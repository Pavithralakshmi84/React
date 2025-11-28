import { useState } from 'react';

const LOCAL_KEY = "college_reviews_v1";

const FormHandling = () => {
  const emptyForm = {
    collegeName: "", location: "", phone: "", email: "",
    courseDetails: "", food: false, bus: false, reviews: ""
  };

  const [data, setData] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const validate = () => {
    if (!data.collegeName.trim()) return "Enter college name";
    if (!data.location.trim()) return "Enter location";
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) return "Invalid email";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { alert(err); return; }

    setSaving(true);
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      const entry = { 
        id: Date.now().toString(), 
        ...data, 
        createdAt: new Date().toISOString() 
      };
      arr.unshift(entry);
      localStorage.setItem(LOCAL_KEY, JSON.stringify(arr));
      setData(emptyForm);
      window.dispatchEvent(new Event("storage"));
      window.dispatchEvent(new CustomEvent("reviews-updated"));
      alert("College details saved! ✓");
    } catch (err) {
      console.error(err);
      alert("Save failed — check console");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 min-h-screen flex justify-center items-center p-6">
      <div className="bg-white text-black p-8 rounded-3xl shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          🏫 College Details
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold mb-2">College Name *</label>
            <input
              type="text"
              name="collegeName"
              value={data.collegeName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="College Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Location *</label>
            <input
              type="text"
              name="location"
              value={data.location}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="e.g., Chennai, Tamil Nadu"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="10 digits"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="e.g., info@college.edu"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Course Details</label>
            <input
              type="text"
              name="courseDetails"
              value={data.courseDetails}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="e.g., B.Tech CSE, B.Sc Physics"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl">
              <input
                type="checkbox"
                name="food"
                checked={data.food}
                onChange={handleChange}
                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <label className="font-medium">🍽️ Food</label>
            </div>
            <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-xl">
              <input
                type="checkbox"
                name="bus"
                checked={data.bus}
                onChange={handleChange}
                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
              />
              <label className="font-medium">🚌 Bus</label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2"> Student Review</label>
            <textarea
              name="reviews"
              rows="4"
              value={data.reviews}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-vertical"
              placeholder="Share your college experience..."
            />
          </div>

          <button
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            type="submit"
            disabled={saving}
          >
            {saving ? "💾 Saving..." : "✅ Save College Details"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormHandling;
