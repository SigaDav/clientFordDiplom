import {Comment} from './Comment';
export interface Project{
  id?: number;
  tittle: string;
  image?: File;
  sumdonates: number;
  nowdonates?: number;
  userDonates?: string[];
  comments?: Comment [];
  username?: string;


}
