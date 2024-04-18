import { PhotoInterface } from "./photo.interface";

export interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
  photo?: PhotoInterface[];
}