var data =  require("./fakeData");

module.exports = function(req, res){
  
    const {name,job} =  req.body.name;
    const nameValid = name !== undefined && typeof name === "string"
    
    const lastId = Math.max.apply(null,data.map(u => u.id))
    const newUser = {
        id: ++lastId
        name,
        job,
    }
    data.push(newUser)
    
    res.send(newUser);

};