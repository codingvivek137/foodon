const mongoose=require('mongoose');
const mongoURL='mongodb+srv://@cluster0.3vqlj.mongodb.net/foodonmern?retryWrites=true&w=majority&appName=Cluster0'
const mongodb=async()=>{
 await mongoose.connect(mongoURL,{useNewUrlParser:true, useUnifiedTopology: true },async (err,result)=>{
    if(err){
        console.log(err);
    }
    else{
    console.log('connected');
    const fetch_data= await mongoose.connection.db.collection("food_items");
    fetch_data.find({}).toArray(async function(err,data){
        const food_category=await mongoose.connection.db.collection("food_category");
        food_category.find({}).toArray(function(err,catData){
            if(err) console.log(err);
            else{
                global.food_items=data;
                global.food_category=catData;
            }
        })
    })
    }
})};

module.exports = mongodb;
