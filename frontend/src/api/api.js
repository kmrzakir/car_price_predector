const BASE_UTL = "https://fluffy-cod-pjggvj5vwq93rvr9-5000.app.github.dev";

export async function getDataOptions() {
  const responce = await fetch(`${BASE_UTL}/data_options`);
  if (!responce.ok) throw new Error("Failed to fetch the data options");
  return responce.json();
}

export async function handleFormSubmit(formData) {
  const responce = await fetch(`${BASE_UTL}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (!responce.ok) throw new Error("Failed to submit the form data");
  return responce.json();
}
