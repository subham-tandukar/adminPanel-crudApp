export const Fetchdata = async (dataToSend) => {
  console.log("dataToSend", dataToSend);
  if (dataToSend.Type === "POST") {
    const response = await fetch(dataToSend.FetchURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    const data = await response.json();
    console.log("data", data);
    return data;
  } else {
    const response = await fetch(dataToSend.FetchURL);
    const data = await response.json();
    console.log("dataaaaa", data);
    return data;
  }
};
