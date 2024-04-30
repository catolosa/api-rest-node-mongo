const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        id: {
            type: String
        },
        
        titulo: {
            type: String
        },
        autor: {
            type: String
        },
        año: {
            type: Number
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const ModelUser = mongoose.model("libreria", userSchema);
module.exports = ModelUser;