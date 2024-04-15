async function awaitCall() {
    try {
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
  
      // Simulated API response
      const data = { message: "Hello, sam!" };
  
      console.log("API response:", data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }
  
  awaitCall();
 