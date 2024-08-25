
import { fetchUserAction } from "@/action";
import AddNewUser from "@/components/add-new-user";
import SingleUser from "@/components/single-user";



async function Usermanagment() {

const getListofUser = await fetchUserAction()
console.log(getListofUser);



    return <div className="p-10 max-w-6xl">

        <div className="flex justify-between">

        <h3> User Managment </h3>
        <AddNewUser/>

        </div>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">

            {

                getListofUser && getListofUser.data && getListofUser.data.length > 0 ?
                  
                getListofUser.data.map(useritem => <SingleUser useritem = {useritem} />):
                <h3>No Data Found</h3>
            }

        </div>

       


    </div>;
}

export default Usermanagment;