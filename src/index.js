const app=require('express')();
const {PORT}=require('./config/server.js')
const setupandStartServer=async ()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on ${PORT}`);
    })
};
setupandStartServer();