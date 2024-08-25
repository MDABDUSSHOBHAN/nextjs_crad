import mongoose from 'mongoose';


const connectToDB = async() =>{

    const uri = "mongodb+srv://shobhanrahman100:fa1jWCZocitl7SD0@cluster0.fknwm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    
mongoose
     
     .connect(uri) 
     .then(() => console.log("Database connection is successfully"))
     .catch((e) => console.log(e))


}

export default connectToDB;