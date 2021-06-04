import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import { resolve } from 'dns';
import {promise} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth) { }

  login(email:string,password:string){

    return new Promise((resolve,rejected) => {
      this.AFauth.signInWithEmailAndPassword (email,password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  register(email : string, password : string){
    return new Promise ((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email,password).then(res =>{
        resolve(res)
      }).catch( err => reject(err))
    })
      
  }
}
