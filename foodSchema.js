const mongoose = require('mongoose');

// Define the schema for food and nutrition data
const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    foodGroup: { type: String },
    description: { type: String },
    nutritionalInformation: {
        calories: { type: Number },
        protein: { type: Number },
        carbs: { type: Number },
        fat: { type: Number }
    },
    servingSize: { type: String },
    allergens: { type: [String] },
    ingredients: { type: [String] },
    preparationMethods: { type: [String] },
    certifications: { type: [String] },
    countryOfOrigin: { type: String },
    brandOrManufacturer: { type: String },
    dietaryRestrictions: { type: [String] },
    healthBenefits: { type: [String] },
    bestPractices: { type: String }
});

module.exports = mongoose.model('Food', foodSchema);