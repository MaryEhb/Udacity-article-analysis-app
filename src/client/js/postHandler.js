const regeneratorRuntime = require("regenerator-runtime");

const handlePost = async (url) => {
  const req = await fetch("http://localhost:9009/userUrl", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(url),
  });
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    return {error: error};
  }
};

export {handlePost};
