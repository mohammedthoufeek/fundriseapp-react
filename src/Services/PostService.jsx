import { axiosInstance } from "./Axios-http-client";
class PostService{
     async getAllPosts() {
        try {
          const response = await axiosInstance.get('http://localhost:8090/posts');
          console.log(response.data);
          return response.data;
        } catch (error) {
          console.error('Error fetching posts:', error);
          return [];
        }
      }
      async getPostById(id){
        try{
            const response=await axiosInstance.get("http://localhost:8090/post/"+id);
            return response.data;
        }
        catch(error){
            console.error("Error fetching post:",error)
            return [];
        }
      }

      async updatePost(updatepost,id){
        try{
            const response=await axiosInstance.put("http://localhost:8090/post?userId=" + id,updatepost);
            return response.data;
        }
        catch(error){
            console.error("Error updating posts:",error)
            return [];
        }
      }

      async addNewPost(post,id){
        try{
            const response=await axiosInstance.post( "http://localhost:8090/post?userId=" + id,post);
            return response.data;
        }
        catch(error){
            console.error("Error creating post ",error);
            return [];
        }
      }
      async getPostByUserId(userId){
        try{
            const response=await axiosInstance.get(`http://localhost:8090/user/${userId}/posts`);
            return response.data;
        }
        catch(error){
            console.error("Error fetching post:",error)
            return [];
        }
      }


}

export default new PostService();