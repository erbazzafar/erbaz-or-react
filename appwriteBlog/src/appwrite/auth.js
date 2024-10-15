import config from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor () {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectID);
        this.account = new Account(this.client)
    }

    async createAccount ({email, password, name}) {
        try{
            const userAcc = await this.account.create(ID.unique(), email, password, name);
            if (userAcc) {
                return this.login({email, password}) //directly logsIn to the user Acc
            } else {
                console.log('User Account does not exist!!');
            }
        } catch (error){
            throw error;
        }
    }

    async logIn (email, password) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            if (session) {
                return session;
            } else {
                console.log("login failed");
            }
        } catch (error) {
            throw error;
        }
    }

    async logOut () {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite services :: logOut :: Error", error);
            
        }
    }

    async getCurrentUser () {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite services :: getCurrentUser :: Error", error);
            
        }
    }



}

const authService = new AuthService;
export default authService