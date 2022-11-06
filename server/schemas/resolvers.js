// const { User, Cat, Dog } = require('../models');


// const Cat = require("../models/Cat");

// const resolvers = {

//   Query:{
//     async Cats(){
//       try{
//         const cats = await Cat.find();
//         return cats;
//       } catch(err){
//         throw new Error(err);
//       }
//     },
//     async Dogs(){
//       try{
//         const dogs = await Dog.find();
//         return dogs;
//       } catch(err){
//         throw new Error(err);
//       }
//     },
//     async Users(){
//       try{
//         const users = await User.find();
//         return users;
//       } catch(err){
//         throw new Error(err);
//       }
//     }
//   }, 
 
  

//     // Query: {
//     //     cats: async () => {
//     //         return Cat.find()
//     //     }
//     // },
//     // Query: {
//     //   dogs: async () => {
//     //     return Dog.find()
//     //   }
//     // }
// };

// module.exports = resolvers;




//  Mutatation:{
//      async register
//      (_,
//       {registerInput:{username,email,password}
//       }, 
//       context, 
//       info
//       ){
//       // validate user data
//       // Make sure user doesn't already exist
//       // hash 
//       password = await bcrypt.hash(password,12);

//       const newUser = new User({
//         email,
//         username,
//         password,
        
//       });

//       const res =await newUser.save();

//       const token =jwt.sign({
//         id:res.id,
//         email:res.email,
//         username:res.username
//       });

//       return{
//         ...res._doc,
//         id:res._id,
//         token

//       }
//     }
//   }