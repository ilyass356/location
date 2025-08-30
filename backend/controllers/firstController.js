const getRoutes = (req , res) => {
    res.json({message:'welcome to my API'})
};


const postRoutes = (req , res) => {
    res.json({message:'create an API'});
};


const putRoutes = (req , res) => {
    res.json({message:`update an API for ${req.params.id}`});
};


const deleteRoutes = (req , res) => {
    res.json({message:`delete an API ${req.params.id}`});
};











module.exports = {getRoutes,postRoutes,putRoutes,deleteRoutes}