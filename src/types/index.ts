
export interface UserProps {
  name: string;
  description:string;

}

export interface TopAreaProps {
  setUser: (user: UserProps | null) => void;
}

export interface UserDataProps {
  user: UserProps;
}