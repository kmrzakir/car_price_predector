import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

function ResultCard({ formData, prediction, onClick }) {
  return (
    <div className="absolute">
      <div className="relative p-4 pt-0 rounded-lg bg-green-300 flex flex-col gap-y-4">
        <MdCancel
          className="absolute -end-4 animate-pulse -top-4 w-6 h-6 text-purple-500"
          onClick={onClick}
        />

        {Object.entries(formData).map(([key, value]) => (
          <p key={key}>
            <strong>{key}</strong> : {value}
          </p>
        ))}
        <p>
          <strong>Predection</strong> : {prediction}
        </p>
      </div>
    </div>
  );
}

export default ResultCard;
