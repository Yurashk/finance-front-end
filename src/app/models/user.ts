export interface User {
  name:string;
  email:string;
  borders:Border[],
}
export interface Border{
  borderOwnerEmail:string;
  name:string;
  id:string;
}
