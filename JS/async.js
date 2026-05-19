// const { log } = require("async");

const deepak = async () => {
      const url = "https://example.org/products.json";
      try {
        const response = await fetch(url,metho)
        if(!response.ok){
            console.log("response status",response.status);
           
        } 
        let result = response.json()
       console.log(result);
        
      } catch (error) {
        console.log("the error is: ", error)
      }  
    
    //   console.log(response.json());
    //   console.log("deepak");
      
      
}   

deepak()

// async function name(params) {
    
// }