import { Category } from "./category";

export interface Announcement {
    id?:String;
    title:String;
    message:String;
    author:String;
    categoryId:String;
    imageUrl:String;
}
