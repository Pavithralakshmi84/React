import React, { useEffect, useState } from "react";

const display = "college_reviews_v1";

const Showdetails = () => {
  const [items, setItems] = useState([]);

  const load = () => {
    try {
      const raw = localStorage.getItem(display);
      const arr = raw ? JSON.parse(raw) : [];
      setItems(Array.isArray(arr) ? arr : []);
    } catch (err) {
      console.error("Failed to parse localStorage", err);
      setItems([]);
    }
  };

  useEffect(() => {
    load();
    const onUpdate = () => load();
    window.addEventListener("reviews-updated", onUpdate);
    window.addEventListener("storage", onUpdate);
    return () => {
      window.removeEventListener("reviews-updated", onUpdate);
      window.removeEventListener("storage", onUpdate);
    };
  }, []);

  if (!items.length) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="text-center py-12">
          <div className="inline-block bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-8 py-6 rounded-2xl shadow-2xl">
            <h3 className="text-xl font-bold mb-2">📚 No Colleges Yet</h3>
            <p className="text-sm opacity-90">Submit college details from the form to see them here.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          🎓 College Directory
        </h1>
        <p className="text-xl text-gray-600 mt-2">All saved college details in order</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {items.map((college) => (
          <article
            key={college.id}
            className="overflow-hidden rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* 1. COLLEGE NAME */}
            <header className="mb-6 border-b border-indigo-200 pb-6">
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">
                {college.collegeName || "Unnamed College"}
              </h2>
              {/* 2. LOCATION */}
              <p className="text-xl text-indigo-700 font-semibold mt-2">{college.location || "—"}</p>
            </header>

            <div className="space-y-6">
              {/* 3. PHONE NUMBER */}
              <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Phone Number</h4>
                  <p className="text-2xl font-bold text-gray-900">{college.phone || "—"}</p>
                </div>
              </div>

              {/* 4. EMAIL */}
              <div className="flex items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Email</h4>
                  <p className="text-xl font-semibold text-gray-900">{college.email || "—"}</p>
                </div>
              </div>

              {/* 5. COURSE DETAILS */}
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Course Details
                </h4>
                <p className="text-lg font-semibold text-gray-900">{college.courseDetails || "No courses listed"}</p>
              </div>

              {/* 6. FOOD & 7. BUS (Together as Facilities) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center text-white text-xl font-bold ${
                    college.food ? 'bg-emerald-500' : 'bg-gray-400'
                  }`}>
                    {college.food ? '🍽️' : '🚫'}
                  </div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Food Facility</h4>
                  <p className={`text-lg font-bold ${college.food ? 'text-emerald-700' : 'text-gray-500'}`}>
                    {college.food ? '✅ Available' : '❌ Not Available'}
                  </p>
                </div>
                <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center text-white text-xl font-bold ${
                    college.bus ? 'bg-orange-500' : 'bg-gray-400'
                  }`}>
                    {college.bus ? '🚌' : '🚫'}
                  </div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Bus Facility</h4>
                  <p className={`text-lg font-bold ${college.bus ? 'text-orange-700' : 'text-gray-500'}`}>
                    {college.bus ? '✅ Available' : '❌ Not Available'}
                  </p>
                </div>
              </div>

              {/* 8. REVIEWS */}
              {college.reviews && (
                <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="text-2xl mr-2">⭐</span>
                    Student Reviews
                  </h4>
                  <p className="text-gray-900 italic leading-relaxed text-lg">"{college.reviews}"</p>
                </div>
              )}
            </div>

            {/* FOOTER */}
            <div className="mt-8 pt-6 border-t border-indigo-200 text-center text-sm text-gray-500">
              Saved: {new Date(college.createdAt).toLocaleDateString('en-IN')}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Showdetails;
