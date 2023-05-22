const mongoose = require('mongoose')

const proschema = mongoose.Schema(
    {
        Doctor_name:{
            type: String ,
            require:[true, "Enter doctor name "]
        },
        Department:{
            type: String,
            required:true,
        },
        Patient_name:{
            type: String,
            required:[true ,"please enter Patient name"],
        },
        Doctor_id:{
            type: Number,
            required:true
        }
    }
)

const Product = mongoose.model('Product', proschema);

module.exports= Product;