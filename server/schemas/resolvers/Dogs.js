const Dog = require('../../models/Dog')
const user = require('../../models/user');
const { AuthenticationError } = require('apollo-server-express/dist');

module.exports = {
    Query:{
        async getDogs(){
            try{
                const dogs = await Dog.find().sort({createdAt:-1});
                return dogs;
            } catch (err){
                throw new Error(err);
            }
        }
    },
    async getDog (_,{dogID}){
        try{
            const dog = await Dog.findById(dogID);
            if(dog){
                return dog;
            } else{
                throw new Error('Dog not found')
            }
        } catch(err){
            throw new Error(err);
        }
    },
    Mutation:{
        async createDog(_,{name,breed,sex,age,city,image},context){
            // const user = checkAuth(context);
            

            const newDog = new Dog({
                name,breed,sex,age,city,image,
                
                createdAt:new Date().toISOString()
            });

            const dog = await newDog.save();
            return dog;
        },
        async deleteDog (_,{dogID},context){
            try{
                const dog = await Dog.findById(dogID);
                if(user.username=== dog.username){
                    await dog.delete();
                    return"post deleted";

                }else{
                    throw new AuthenticationError('Action not allowed');
                }
            } catch(err){
                throw new Error(err);
            }
        }
    }
}