import { useEffect} from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const BASE_URL = 'http://localhost:8000'

  const getUser = async (id) => {
    const response = await axios.get(`${BASE_URL}/users/${id}`)
    console.log(response.data)
  }

  const addUser = async (newUser) => {
    try {
      const check = await axios.get(`${BASE_URL}/users/${newUser.id}`);
      if (check.data?.id === newUser.id) {
        console.log("User already exists");
        return;
      }
    } catch (err) {
      if (err.response?.status === 404) {
        const response = await axios.post(`${BASE_URL}/users`, newUser);
        console.log("User added:", response.data);
        return;
      }
    }
  };

  const deleteUser = async (id) => {
    try {
      const check = await axios.get(`${BASE_URL}/users/${id}`);
      if (check.data?.id === id) {
        await axios.delete(`${BASE_URL}/users/${id}`);
        console.log(`User ${id} deleted`);
      }
    } catch (error) {
      if (error.response?.status === 404) {
        console.log("User does not exist");
      } else {
        console.error("Unexpected error in deleteUser:", error);
      }
    }
  };
  const updateUser = async (id, updatedInfo) => {
    // Mevcut kullanıcıyı al
    const {data : currentUser} = await axios.get(`${BASE_URL}/users/${id}`);
    /* veya 
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    const currentUser = response.data;      */
    const updatedUser = { ...currentUser, ...updatedInfo };
    await axios.put(`${BASE_URL}/users/${id}`, updatedUser);
  };
  
  
  useEffect(() => {
    const run = async () => {
      await getUser(1);
  
      await addUser({
        id: "8812",
        name: "berfin yüksel",
        email: "berfin.yuksell@gmail.com"
      });
  
      deleteUser(2);
      updateUser(1, {
        "email": "johndoe@gmail.com"
      })
      updateUser(1, {"name": "Johnny Doe"})
    };
  
    run();
  }, []);
  
    
  return (
    <>
    
    </>
  )
}

export default App
