function handleSubmit(e) {
  e.preventDefault();

  const url = document.getElementById("url").value;
  Client.handlePost({url}).then((res) => {
    Client.handleChange(res);
  });
}

export {handleSubmit};
