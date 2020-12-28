interface MyUser{
    UserId:number;
    UserName:string;
    Name?:string; //Optional 
    readonly Email:string; //readonly
}

interface MyNewUser extends MyUser{
    
}