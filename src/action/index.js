"use server";

import connectToDB from "@/database";
import User from "@/models/User";
import { revalidatePath } from "next/cache";



//this is for add section ....
export async function addNewUserAction(formData,pathToRevalidate) {

    await connectToDB();

    try {

        const newlyCreatedUser = await User.create(formData);

        if (newlyCreatedUser) {
            revalidatePath(pathToRevalidate)
            return {

                success: true,
                message: ' data added successfully'

            }

          

        }
        else{

            return {
                success: false,
                message: 'Some error occured! please try again'
            }
        }



    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: 'Some error occured! please try again'
        }
    }
}

// This  is for fetch data 

export async function fetchUserAction() {
    
    await connectToDB();


    try{

   const listOfUsers = await User.find({});

   if(listOfUsers){

    return {
        success : true,
        data: JSON.parse(JSON.stringify(listOfUsers)),
       
    }
   }
   else{
   
    return {
        success: false,
        message: 'Some error occured! data can not insert '
    }
   
   }



    }catch(error){
        console.log(error);
        return {
            success: false,
            message: 'Some error occured! data can not insert '
        }
    }
}

// delete a user action 

export async function deleteUserAction(currentUserID,pathToRevalidate){

    await connectToDB();

    try{

        const deletedUser = await User.findByIdAndDelete(currentUserID);
        if(deletedUser){
            revalidatePath(pathToRevalidate)
            
            return{

                success:true,
                message: 'User deleted successfully',
            }
        }
        else{
          
            return {
                success: false,
                message: 'Some error occured! delete operation can not perform '
            }

        }

    }catch(error){

        console.log(error);
        return {
            success: false,
            message: 'Some error occured! delete operation can not perform '
        }

    }
}