
// import { axiosInstance } from './Axios-http-client';

// export const NotificationService = {
  
//   getAllNotificationsByUserId: async (userId) => {
//     try {
//       //const response = await axiosInstance.get(`http://localhost:8090/Notification/${userId}`);
//       const response = await axiosInstance.get(`http://localhost:8090/Notification/1`);
//       console.log(response.data)
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching notifications:', error);
//       return [];
//     }
// }
// };


import { axiosInstance } from "./Axios-http-client";
class NotificationService{

  async getAllNotificationsByUserId(userId){
    try{
        const response=await axiosInstance.get("http://localhost:8090/Notification/1");
        return response.data;
    }
    catch(error){
        console.error("Error fetching post:",error)
        return [];
    }
  }
}

export default new NotificationService();