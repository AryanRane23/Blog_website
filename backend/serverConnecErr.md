# If Server not connecting to MongoDB, then..

`` Windows + r``
``services.msc``
``Start MongoDB service ``

# If Server not connecting to Express
  CMD - 
``netstat -ano | findstr :3000``
``taskkill /PID 21944 /F``
