import { writable } from 'svelte/store';

export const basicUserFormData = writable({
   name: '',
   dob:'',
   email: '',
   phone: '',
});



export const otherDetailsFormData = writable({
   addressLine1:'',
   addressLine2:'',
   city:'',
   state:'',
   pincode:'',
   
})


export const incomeFormData = writable({
   panNumber:'',
   occupationType:''
})


export const usernamePassFormData = writable({
   password:'',
   confirmPassword:''
})