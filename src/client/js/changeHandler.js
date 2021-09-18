function handleChange(data) {
  const results = document.getElementById("results");

  if (data.status.code === "0") {
    results.innerHTML = `
                <p><span>model: </span> ${data.model}</p>
                <p><span>score tag: </span>${data.score_tag}</p>
                <p><span>agreement: </span>${data.agreement}</p>
                <p><span>subjectivity: </span>${data.subjectivity}</p>
                <p><span>confidence: </span>${data.confidence}</p>
                <p><span>irony: </span>${data.irony}</p>`;
  } else {
    results.innerHTML = `
                <div>
                <h1>Error: ${data.status.code}</h1>
                <p>${data.status.msg}</p>
                </div>`;
  }
}

export {handleChange};
