const mongoose = require("mongoose");

const assetSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "This is a required field"]
        },
        type: {
            type: String,
            enum: ["computer","laptop","mobile","tablet","other"]
        }
    }
)

const Asset = mongoose.model('Asset',assetSchema);

module.exports = Asset;