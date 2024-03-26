



import { axiosInstance } from "./Axios-http-client";
class NotificationService{

  async getAllNotificationsByUserId(userId){
    try{

        //const response=await axiosInstance.get(`http://localhost:8090/Notification/1`);
        const response = await axiosInstance.get(`http://localhost:8090/Notification/${userId}`);
        return response.data;
    }
    catch(error){
        console.error("Error fetching post:",error)
        return [];
    }
  }
  async sendNotificationToAllUsersExceptPublisher( userId,  postId){
    try{
        const response=await axiosInstance.get(`http://localhost:8090/Notification/${userId}/${postId}`);
        //const response = await axiosInstance.get(`http://localhost:8090/Notification/${userId}`);

        return response.data;
    }
    catch(error){
        console.error("Error fetching post:",error)
        return [];
    }
  }
}

export default new NotificationService();