const { AuthenticationError } = require('apollo-server-express/dist');
const Cat = require('../../models/Cat');
const user = require('../../models/user');

// const checkAuth = require('../../utils/check-auth');

module.exports = {
    Query:{
        async getCats(){
            try{
                const cats = await Cat.find().sort({createdAt:-1});
                return cats;
            } catch (err){
                throw new Error(err);
            }
        }
    },
    async getCat (_,{catID}){
        try{
            const cat = await Cat.findById(catID);
            if(cat){
                return cat;
            } else{
                throw new Error('Cat not found')
            }
        } catch(err){
            throw new Error(err);
        }
    },
    Mutation:{
        async createCat(_,{name,breed,sex,age,city,image},context){
            // const user = checkAuth(context);
            

            const newCat = new Cat({
                name,breed,sex,age,city,image,
                
                createdAt:new Date().toISOString()
            });

            const cat = await newCat.save();
            return cat;
        },
        async deleteCat (_,{catID},context){
            try{
                const cat = await Cat.findById(catID);
                if(user.username=== cat.username){
                    await cat.delete();
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

// module. exports= {
//     Query:{
//         async Cats(){
//           try{
//             const cats = await Cat.find();
//             return cats;
//           } catch(err){
//             throw new Error(err);
//           }
//         }
//     },
// }