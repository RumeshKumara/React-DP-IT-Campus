// Defining an asynchronous function
async function fetchUserData() {
    try {
      // Await the response from the API
      const response = await fetch('https://api.example.com/users/1');
      
      // Await the JSON data from the response
      const userData = await response.json();
      
      // Process the user data
      console.log('User Data:', userData);
    } catch (error) {
      // Handle any errors that occurred
      console.error('Error fetching user data:', error);
    }
  }
  
  // Call the asynchronous function
  fetchUserData();