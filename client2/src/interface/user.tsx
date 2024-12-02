export interface User extends Document{
    name:string
    email:string
    password:string
    role: "driver" | "admin"| "passenger"
}