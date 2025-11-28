import React, { useState } from "react";

const Form = () => {
  const [personal, setPersonal] = useState({
    pname: "",
    pemail: "",
    pmobile: "",
  });
  const [saving, setSaving] = useState(false);

  const personalChanged = (e) => {
    const { name, value } = e.target;
    setPersonal(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!personal.pname.trim()) return "Enter name";
    if (!personal.pemail.trim()) return "Enter email";
    if (personal.pemail && !/^\S+@\S+\.\S+$/.test(personal.pemail)) return "Email invalid";
    if (!personal.pmobile.toString().trim()) return "Enter mobile";
    if (personal.pmobile.toString().length !== 10) return "Mobile must be 10 digits";
    return null;
  };

  const personalClick = (e) => {
    e.preventDefault();
    const err = validate();
    if (err) { 
      alert(err); 
      return; 
    }

    setSaving(true);
    // Simulate save (no localStorage, no form display link)
    setTimeout(() => {
      console.log("✅ Personal Details Saved:", personal);
      alert("Personal details saved successfully! ✓\nCheck console for details.");
      setPersonal({ pname: "", pemail: "", pmobile: "" }); // Reset form
      setSaving(false);
    }, 1500);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-pink-400 to-rose-500 min-h-screen py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-white mb-12 drop-shadow-lg">
            👤 Personal Details
          </h1>

          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-2xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Your Name:</label>
                <input
                  type="text"
                  name="pname"
                  value={personal.pname}
                  placeholder="Enter your full name"
                  className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gradient-to-r from-white to-gray-50 shadow-sm hover:shadow-md transition-all duration-200"
                  onChange={personalChanged}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Email ID:</label>
                <input
                  type="email"
                  name="pemail"
                  value={personal.pemail}
                  placeholder="your.email@example.com"
                  className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gradient-to-r from-white to-gray-50 shadow-sm hover:shadow-md transition-all duration-200"
                  onChange={personalChanged}
                  required
                />
              </div>

              {/* Mobile */}
              <div className="space-y-2 md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700">Mobile No:</label>
                <input
                  type="tel"
                  name="pmobile"
                  value={personal.pmobile}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full p-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gradient-to-r from-white to-gray-50 shadow-sm hover:shadow-md transition-all duration-200"
                  onChange={personalChanged}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-full flex justify-center pt-4">
                <button
                  className="bg-gradient-to-r from-black to-gray-900 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl hover:from-gray-900 hover:to-black hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transform w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={personalClick}
                  disabled={saving}
                >
                  {saving ? (
                    <>
                      <span className="mr-2 animate-spin">💾</span>
                      Saving...
                    </>
                  ) : (
                    "✅ Save Personal Details"
                  )}
                </button>
              </div>
            </form>

            {/* Saved Data Preview (local only) */}
            {personal.pname && (
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-3">📋 Preview:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div><strong>Name:</strong> {personal.pname}</div>
                  <div><strong>Email:</strong> {personal.pemail}</div>
                  <div><strong>Mobile:</strong> {personal.pmobile}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
