import config from "../config.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    database;
    bucket;

    constructor () {
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectID);
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost ({title, slug, featuredImg, content, status, userID}) {
        try {
            return await this.database.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug, //it act as a Document ID 
                      //it can be ID.unique() in other cases, as now slug will work as an ID for me
                {
                    title,
                    featuredImg,
                    content,
                    status,
                    userID             
                }
            )
        } catch (error) {
            console.log('appwrite :: appwriteConfig :: createPost :: error ', error);
        }
    }

    async updatePost(slug, {title, featuredImg, content, status }) {
        try {
            return await this.database.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    featuredImg,
                    content,
                    status
                }

            )
        } catch (error) {
            console.log('appwrite :: appwriteConfig :: updatePost :: error ', error);
        }
        
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
            return true
        } catch (error) {
            console.log('appwrite :: appwriteConfig :: deletePost :: error ', error);
            return false
        }
    }

    async getOnePost (slug) {
        try {
            await this.database.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
            return true
        } catch (error) {
            console.log('appwrite :: appwriteConfig :: getOnePost :: error ', error);
            return false
        }
    }

    async listPosts () {
        try {
            return await this.database.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                [
                    Query.equal("status", "active")
                ]
            )
        } catch (error) {
            console.log('appwrite :: appwriteConfig :: listPosts :: error ', error);
            return false
        }
    }

    //file Upload Service 
    
    async uploadFile (file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('appwrite :: appwriteConfig :: uploadFile :: error ', error);
            return false
        }
    }

    async deleteFile (fileId) {
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketID,
                fileId
            )
            return true;
        } catch (error) {
            console.log('appwrite :: appwriteConfig :: deleteFile :: error ', error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketID,
            fileId
        )
    }
}

const service = new Service()
export default service