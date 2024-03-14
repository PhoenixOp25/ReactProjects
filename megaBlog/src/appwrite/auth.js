import conf from '../conf/conf.js'
import {client,Account,ID} from "appwrite";


export class AuthService{
    client=new client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client);

    }
    async createAccount({email,password,name}){
        try{
            const userAcccount=await this.account.create
            (ID.unique(),email,password,name);
            if(userName){
                // ek alag method call hoga
                return this.login({email,password});
            }
            else{
                return userAcccount;
            }
        }
        catch(error){
            throw error;
        }
    }
    async login({email,password}){
        try{
            return await this.account.createEmailSession(email,password);
        }
        catch (error){
            throw error;
        }
    }
    async getCurrentUser(){
        try{
           return  await this.account.get()
        }
        catch(error){
            console.log("Appwrite s ervice:: getCurrentUser:: error",error);
        }
        return null;
    }
    async logout(){
        try{
            await this.account.deleteSession('current');
        }
        catch (error){
            console.log("Appwrite s ervice:: getCurrentUser:: error",error);
        }
    }
}

const authService=new AuthService();


export default AuthService