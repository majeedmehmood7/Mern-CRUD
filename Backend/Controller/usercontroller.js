import User from "../Models/usermodel.js";

export const create = async (req, res) => {
    try {
        const userData = new User(req.body);  // Pass req.body here

        if (!userData) {
            return res.status(400).json({ msg: "User data not found" });
        }

        const saveData = await userData.save();
        res.status(200).json({ saveData });
    } catch (error) {
        res.status(500).json({ error: error.message });  // Return only error message
    }
};


export const getAll = async(req,res)=>{
    try{
        const userData = await User.find();
        if(!userData){
            return res.status(404).json({msg:"User data not found"});
        }
        res.status(200).json(userData);

    }catch(error) {
        res.status(500).json({ error: error.message });
    }
}


export const getOne = async(req,res)=>{
    try{

        const id = req.params.id;
        const UserExist = await User.findById(id);
        if(!UserExist){
            return res.status(404).json({msg:"User not Found"});
        }
        res.status(200).json(UserExist);

    }catch(error) {
        res.status(500).json({ error: error.message });
    }
}

export const update = async(req,res)=>{
    try{
        const id = req.params.id;
        const UserExist = await User.findById(id);
        if(!UserExist){
            return res.status(404).json({msg:"User not Found"});
        }
        const updateDate = await User.findByIdAndUpdate(id, req.body,{new:true});
        res.status(200).json(updateDate);


    }catch(error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteUser = async(req,res)=>{
    try{
        const id = req.params.id;
        const UserExist = await User.findById(id);
        if(!UserExist){
            return res.status(404).json({msg:"User not Found"});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User Deleted"});

    }catch(error) {
        res.status(500).json({ error: error.message });
    }
}