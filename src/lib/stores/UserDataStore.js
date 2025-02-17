import { writable } from 'svelte/store';


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


export const currentUser=writable(null)



currentUser.subscribe(value=>{
   console.log(value);
   
})