import React from "react";

function Input({ label, name, onChange, placeholder, input_error }) {
  return (
    <div className="flex flex-col mb-4 gap-y-2">
      <label className="font-bold text-gray-800" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="p-2 border-2 border-orange-300 rounded outline-none"
      />
      {input_error && <p className="text-sm text-red-900">{input_error}</p>}
    </div>
  );
}
export default Input;
