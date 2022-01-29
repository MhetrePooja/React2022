import { Person } from "./person.js";

export class Hero extends Person{
    firstname = "default first name"; //public property
    lastname = " default last name";  //public property
    _secret = "My secret Mission"; // private property
    static version = 1001; //static property

    constructor(fname,lname,heroage){
        super(heroage);
        this.firstname = fname;
        this.lastname = lname;  
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get secret(){
        return this._secret;
    }
    set secret(newMission){
        return this._secret= newMission;
    }
}