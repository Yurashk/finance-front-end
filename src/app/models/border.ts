export interface Border {
  _id:string;
  name:string;
  ownerEmail:string;
  goal:string;
  users:BorderUser[];
  spendMoney:BorderSpendMoney[]
}
export interface BorderUser{
  name:string;
  email:string;
}
export interface BorderSpendMoney{
  date: string;
  price: string;
  forWhat: string;
  who:string;
}
