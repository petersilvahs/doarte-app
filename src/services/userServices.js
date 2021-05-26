import { api } from '../services/api';

export const getUser = async () => {
    try{
      const response = await api.get("user",{
        headers:{
          'x-access-token':localStorage.getItem('@doartexszsA-token')
        }
      });
 
      if (!response.status === 200) throw new Error(JSON.stringify(response));
  
      const data = response.data;
      return(data);
    } 
    catch (err){
      console.log('ERRO:' + err)
    }
};

export const createUser = async (user) => {
  try{
    const response = await api.post("auth/signUp", user);
    
    if (!response.status === 200) throw new Error();

    return response.data;
  } 
  catch (err){
    console.log(err.message);
  }
};

export const loginUser = async (user) => {  
  try{
    const response = await api.post("auth/signIn", user);
    
    if (!response.status === 200) throw new Error();

    return response.data;
  } 
  catch (err){
    console.log(err);
  }
};

export const updateUser = async (user) => {
  try{
    for (const key in user) {
      if (!key) {
        delete user.key;
      }
    }
    const response = await api.patch("user/update", user,{
      headers:{
        'x-access-token':localStorage.getItem('@doartexszsA-token')
      }
    });
    
    if (!response.status === 200) throw new Error();

    console.log(response.data);
    return response.data;
  } 
  catch (err){
    console.log(err);
  }
};
