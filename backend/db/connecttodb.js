import mongoose from 'mongoose';
const connecttodb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log("error connecting to db",err);
    }
};
export default connecttodb;