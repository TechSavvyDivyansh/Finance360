import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const userDataCollectionFormData=writable({
   name: '',
   dob:'',
   email: '',
   phone: '',
   addressLine1:'',
   addressLine2:'',
   city:'',
   state:'',
   pincode:'',
   panNumber:'',
   occupationType:'',
   password:'',
   confirmPassword:''
})


export const loginFormData=writable({
   username:'',
   password:''
})


// export const currentUser=writable(null)



// currentUser.subscribe(value=>{
//    console.log(value);
   
// })


export const currentUser=writable(browser && (JSON.parse(localStorage.getItem("currentUser"))))

currentUser.subscribe((val)=>{
   browser && localStorage.setItem("currentUser",JSON.stringify(val))
   console.log(val);
   
})