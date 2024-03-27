import { axiosInstance } from "./Axios-http-client";
class TransactionService{
    
    addPayment(transaction){
        return axiosInstance.post(`http://localhost:8090/payment`,transaction);
    }

}
export default new TransactionService();