// src/lib/validation.js
import { z } from 'zod';

// Define validation schema
export const basicUserDataSchema = z.object({
   name: z.string().min(2, "Full name must be at least 2 characters."),
   dob: z.string()
       .refine(value => {
           const dob = new Date(value);
           const today = new Date();
           const age = today.getFullYear() - dob.getFullYear();
           const monthDiff = today.getMonth() - dob.getMonth();
           const dayDiff = today.getDate() - dob.getDate();
           
           // Adjust age calculation for cases where birthday hasn't happened yet this year
           if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
               return age - 1 >= 18;
           }
           return age >= 18;
       }, "You must be at least 18 years old."),
   email: z.string().email("Invalid email format."),
   phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits."),
});


// Define address and additional details validation schema
export const userOtherDetailSchema = z.object({
    addressLine1: z.string().min(5, "Address Line 1 must be at least 5 characters."),
    addressLine2: z.string().optional(),  // Optional field
    city: z.string().min(2, "City name must be at least 2 characters."),
    state: z.string().min(2, "State name must be at least 2 characters."),
    pincode: z.string().regex(/^\d{6}$/, "Pincode must be exactly 6 digits."),
    
});


export const incomeStatusSchema = z.object({
    panNumber: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]$/, "Invalid PAN number format."), 
    occupationType: z.enum(["Salaried", "Self-employed", "Student", "Unemployed"], {
        errorMap: () => ({ message: "Occupation type must be one of: Salaried, Self-Employed, Student, Unemployed" })
    }),
})



export const userAuthSchema = z.object({
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .max(10, "Password cannot exceed 10 characters")
        .regex(/[A-Za-z]/, "Password must contain at least one letter")
        .regex(/[0-9]/, "Password must contain at least one digit")
        .regex(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)"),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

