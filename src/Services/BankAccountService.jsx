import { axiosInstance } from "./Axios-http-client";
class BankAccountService{

    createAccount(bankaccount,id){
        return axiosInstance.post(`http://localhost:8090/account/${id}`,bankaccount);
    }
    getAccountById(id){
        return axiosInstance.get(`http://localhost:8090/account/${id}`);
    }
}

export default new BankAccountService();