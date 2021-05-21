import {api} from '../services/api';

export const getUser = async (id) => {
    try{
      const response = await api.get("user", {
        params: {
          ID: id
        }
      });
  
      if (!response.ok) throw new Error();
  
      const data = response.json();
  
      return data;
    } 
    catch (err){
      console.log(err);
    }
};
export const getUsers = async () => {
  try{
    const response = await api.get("all");
    
    //if (!response.ok) throw new Error();

    const data = response.data;

    console.log(data);
  } 
  catch (err){
    console.log(err);
  }
};
export const createUser = async (user) => {
  try{
    const response = await api.post("auth/signUp",user);
    
    if (!response.status === 200) throw new Error();

    const data = response.data;
    console.log(response);
    console.log(data);
  } 
  catch (err){
    console.log(err);
  }
};
export const loginUser = async (user) => {
  try{
    const response = await api.post("auth/signIn",user);
    
    if (!response.status === 200) throw new Error();

    const data = response.data;
 
    console.log(data);
  } 
  catch (err){
    console.log(err);
  }
};

