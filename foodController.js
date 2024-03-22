const Food = require('.app/food');

// Controller functions for CRUD operations
exports.getAllFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getFoodById = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.json(food);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createFood = async (req, res) => {
    const food = new Food(req.body);
    try {
        const newFood = await food.save();
        res.status(201).json(newFood);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateFood = async (req, res) => {
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.json(food);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteFood = async (req, res) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id);
        if (!food) {
            return res.status(404).json({ message: 'Food not found' });
        }
        res.json({ message: 'Food deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};