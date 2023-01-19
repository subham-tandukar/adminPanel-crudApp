export const Fetchdata = async (dataToSend) => {
  if (dataToSend.Type === "POST") {
    const response = await fetch(dataToSend.FetchURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    const data = await response.json();

    return data;
  } else if (dataToSend.Type === "PATCH") {
    const response = await fetch(dataToSend.FetchURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    const data = await response.json();

    return data;
  } else if (dataToSend.Type === "DELETE") {
    const response = await fetch(dataToSend.FetchURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    const data = await response.json();

    return data;
  } else {
    const response = await fetch(dataToSend.FetchURL);
    const data = await response.json();
    return data;
  }
};
