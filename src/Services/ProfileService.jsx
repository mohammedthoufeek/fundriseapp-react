import { axiosInstance } from "./Axios-http-client";
class ProfileService{

  async getProfileById(userId){
    try{
        const response=await axiosInstance.get("http://localhost:8090/profile/1");
        return response.data;
    }
    catch(error){
        console.error("Error fetching post:",error)
        return [];
    }
  }
}

export default new ProfileService();