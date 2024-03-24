
export interface UserProps {
  name: string;
  description:string;
  language: string;
  stars:string;

}

export interface TopAreaProps {
  setUser: (user: UserProps | null) => void;
}

export interface UserDataProps {
  user: UserProps;
}