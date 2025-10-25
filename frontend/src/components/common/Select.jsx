import React from "react";

function Select({ options, onChange, label, name }) {
  return (
    <div className="flex flex-col mb-4 gap-y-2">
      <label htmlFor={name} className="font-bold text-gray-800">
        {label}
      </label>
      <select
        name={name}
        id={name}
        onChange={onChange}
        className="p-1 border-2 border-orange-300 rounded outline-none"
      >
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
