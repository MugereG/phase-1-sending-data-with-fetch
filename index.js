// Add your code here

function submitData(name, email) {
    const formData = {
      name: name,
      email: email,
    };
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(response => response.json())
      .then(data => {
        // Assuming the server responds with the new ID
        const id = data.newUserId;
        document.body.innerHTML += `<p>User ID: ${id}</p>`;
        return data;
      })
      .catch(error => {
        // Handle errors and append the error message to the DOM
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
  