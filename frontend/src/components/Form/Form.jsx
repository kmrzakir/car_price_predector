import React, { useState, useEffect } from "react";
import Select from "../common/Select";
import Input from "../common/Input";
import useInputErrorStore from "../../store/useStore";
import useCarForm from "./hooks/useCarForm";
import Loader from "./Loader";

function Form({ data }) {
  const { yearInput, kmsDrivenInput } = useInputErrorStore();
  const {
    formData,
    filteredCars,
    loader,
    prediction,
    handleChange,
    handleSubmit,
  } = useCarForm(data);

  return (
    <div className="relative flex items-center justify-center ">
      {loader && <Loader />}
      <form
        onSubmit={loader ? undefined : handleSubmit}
        className={loader ? "opacity-50 flex-1" : "flex-1"}
      >
        {/* select name of the company */}
        <Select
          label="Select Company Name : "
          onChange={handleChange}
          options={data.company}
          name="company"
        />

        {/* select name of the car div */}
        <Select
          label="Select Car Name : "
          onChange={handleChange}
          options={filteredCars}
          name="Name"
        />
        {/* select year of the car */}
        <Input
          placeholder="2018"
          onChange={handleChange}
          name="year"
          label="Select Year : "
          input_error={yearInput}
        />
        {/* select kms driven of the car */}
        <Input
          placeholder="9999"
          onChange={handleChange}
          name="kms_driven"
          label="Kms Driven : "
          input_error={kmsDrivenInput}
        />
        {/* select fuel type of the car */}
        <Select
          label="Select Feul Type : "
          onChange={handleChange}
          name="fuel_type"
          options={data.fuel_type}
        />
        {/* submit button */}
        <button
          className="bg-orange-500 text-white p-2 rounded font-bold w-full transition-colors duration-300 ease-in-out
 hover:bg-orange-300"
          type="submit"
        >
          Submit
        </button>
        {prediction && (
          <p className="text-auto font-bold text-gray-800 mt-2 ">
            Car price will be : {prediction}
          </p>
        )}
      </form>
    </div>
  );
}

export default Form;
