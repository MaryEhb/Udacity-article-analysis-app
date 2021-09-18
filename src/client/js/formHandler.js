function handleSubmit(e) {
  e.preventDefault();

  const url = document.getElementById("url").value;
  if (Client.urlChecker(url)) {
    Client.handlePost({url}).then((res) => {
      Client.handleChange(res);
    });
  }else{
    alert('Please enter a valid URL')
  }
}

export {handleSubmit};
