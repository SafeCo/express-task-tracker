

const getAllTasks = (req, res) =>{
    res.send("all items from controller")
}

const createTask = (req, res) =>{
    res.send("create Task")
}

const getTask = (req, res) =>{
    res.send("get singel task")
}

const updateTask = (req, res) =>{
    res.send("update task")
}

const deleteTask = (req, res) =>{
    res.send("deleteTask")
}




module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}