import { useState, useEffect } from "react";
import { handleFormSubmit } from "../../../api/api";
import validateFormData from "../formValidation";

export default function useCarForm(data) {
  const [filteredCars, setFilteredCars] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    year: "",
    kms_driven: "",
    fuel_type: "",
  });

  const [loader, setLoader] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [cancleCardState, setCancleCardState] = useState(true);

  // run when the page first loads
  useEffect(() => {
    if (data?.company?.length > 0) {
      const defaultCompany = data.company[0];
      const defaultFilteredCars =
        data.name?.filter((car) => car.includes(defaultCompany)) || [];
      const defaultFuelType = data.fuel_type?.[0] || "";
      setFormData({
        ...formData,
        company: defaultCompany,
        name: defaultFilteredCars[0] || "",
        fuel_type: defaultFuelType,
      });
      setFilteredCars(defaultFilteredCars);
    }
  }, [data]);

  const filterCarNames = (companyName) => {
    const filter = data?.name?.filter((car) => car.includes(companyName)) || [];
    setFilteredCars(filter);
    setFormData((prev) => ({ ...prev, name: filter[0] || "" }));
  };

  const cancleCard = () => {
    setPrediction(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "company") filterCarNames(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateFormData({
      year: formData.year,
      kms_driven: formData.kms_driven,
    });
    if (error) return console.log("Validation error:", error);

    try {
      setLoader(true);
      const res = await handleFormSubmit(formData);
      setPrediction(res.predection);
    } catch (err) {
      console.error("Error fetching prediction:", err);
    } finally {
      setLoader(false);
    }
  };

  return {
    formData,
    filteredCars,
    loader,
    prediction,
    handleChange,
    handleSubmit,
    cancleCard,
  };
}
