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


userDataCollectionFormData.subscribe(value=>{
   console.log(value);
   
})