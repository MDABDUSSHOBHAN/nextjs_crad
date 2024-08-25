'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button";
import { deleteUserAction } from "@/action";
  
function SingleUser({useritem}) {

async function handelDelete(getCurrentUserID) {
    
    const result = await deleteUserAction(getCurrentUserID,'/user-management');
    console.log(result);
}



    return <div>

         




          <Card>
  <CardHeader>
    <CardTitle>{useritem?.firstName} {useritem?.lastName}</CardTitle>
    <CardDescription>{useritem?.email}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{useritem?.address}</p>
  </CardContent>
  <CardFooter className= 'flex justify-between'>
    <Button>Edit</Button>
    <Button onClick = {() => handelDelete(useritem?._id)}>Delete</Button>
  </CardFooter>
</Card>
    </div>;
}

export default SingleUser;