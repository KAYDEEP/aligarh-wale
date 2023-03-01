const server = process.env.API_URL;
const env = process.env.NODE_ENV !=='production';


console.log("🚀 ~ file: server.js:3 ~ env", env)
console.log("🚀 ~ file: server.js:2 ~ server", server)

export  { server };
