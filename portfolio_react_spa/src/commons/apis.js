/**
 * fetchData
 */
export const fetchData = async (url) => {
  try {
    const res_data = await fetch(url); 
    if(!res_data.ok)  throw new Error("!!!!! Error!!!!");  
    const json_data = await res_data.json();
    
    return json_data;        
  } catch (error) {
    console.log('Network Error!!',error);
  }
}
