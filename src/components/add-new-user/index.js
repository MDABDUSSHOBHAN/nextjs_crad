'use client'


import { addNewUserAction } from "@/action"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils"


import { useState } from "react";
function AddNewUser() {
  const [openPopup, setOpenPopup] = useState(false);

  const [addNewUserFormData, setAddNewUserFormData] = useState(addNewUserFormInitialState);

  console.log(addNewUserFormData);

  function handelSaveButtonValid() {

    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  }

  async function handleAddNewUserAction() {

    const result = await addNewUserAction(addNewUserFormData, '/user-management')
    console.log(result);
    setOpenPopup(false)
    setAddNewUserFormData(addNewUserFormInitialState)
  }

  return <div>


    <Button onClick={() => setOpenPopup(true)}>Add New User</Button>



    {/* dialog */}

    <Dialog open={openPopup} onOpenChange={() => {

      setOpenPopup(false);
      setAddNewUserFormData(addNewUserFormInitialState);
    }}>

      <DialogContent className=" sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
        </DialogHeader>
        <form action={handleAddNewUserAction} className="grid gap-4 py-4 ">
          <div className=" items-center gap-4">


            {

              addNewUserFormControls.map(controlItem => <div key={controlItem.name} >


                <Label htmlFor={controlItem.name} className="text-right">
                  {controlItem.label}
                </Label>
                <Input
                  id={controlItem.name}
                  name={controlItem.name}
                  placeholder={controlItem.placeholder}

                  className="col-span-3"
                  type={controlItem.type}
                  value={addNewUserFormData[controlItem.name]}
                  onChange={(event) => setAddNewUserFormData({

                    ...addNewUserFormData,
                    [controlItem.name]: event.target.value
                  })}
                />
              </div>)
            }


          </div>
          <DialogFooter>
            <Button
              className="disabled:opacity-50"
              disabled={!handelSaveButtonValid()}
              type="submit"

            >
              Save changes
            </Button>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog>
  </div>
}

export default AddNewUser;