// for getting information about the platform being used


const os = require('os');
// this gives the operating system
console.log(os.platform())

// computer name
console.log(os.hostname())
// computer architecture
console.log(os.arch())

// memory in gigabytes
console.log(os.totalmem()/1000000) // about 16gb

// info about your CPU core info
console.log(os.cpus()) // intel i7-8700 CPU 3.2GHz (wow. )

// free memory ing gigabytes
console.log(os.freemem()/1000000)
// uptime (in hours)
console.log(os.uptime()/3600)
// ports and IP addriss wifi address
console.log(os.networkInterfaces())