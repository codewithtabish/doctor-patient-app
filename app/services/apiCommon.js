export const commonApiMethod=async(method,url,data=null,headers={})=>{
    try {
        let config={
            method: method,
        headers: {
         'Content-Type': 'application/json',
        ...headers,
    // add other headers as needed
        },
        

        }
        if(data!==null){
            config.body=JSON.stringify(data)
        }

        const response=await fetch(url,config)
        const responseData=await response.json()
        return responseData
     
    } catch (error) {
        console.log("The common Api method is ",error)
        
    }
}


