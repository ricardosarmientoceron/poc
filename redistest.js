var redis = require("redis");
const client = redis.createClient();

async function testCache() {

    // Connect to the Azure Cache for Redis over the TLS port using the key.
    var cacheHostName = "pocsiitest.redis.cache.windows.net";
    var cachePassword = "1nCPVS644ZnYgL7ihFA8pxZEu7JrjkfqeAzCaOPnVZA=";
    var cacheConnection = redis.createClient({
        // rediss for TLS
        url: "rediss://" + cacheHostName + ":6380",
        password: cachePassword,
    });
    await cacheConnection.connect();

    // Perform cache operations using the cache connection object...

    // Simple PING command
    console.log("\nCache command: PING");
    console.log("Cache response : " + await cacheConnection.ping());

    // Simple get and put of integral data types into the cache
    console.log("\nCache command: GET Message");
    console.log("Cache response : " + await cacheConnection.get("Message"));

    console.log("\nCache command: SET Message");
    console.log("Cache response : " + await cacheConnection.set("Message",
        "Hello! The cache is working from Node.js!"));



    console.log("\nCache command: SET Message");
    console.log("Cache response : " + await cacheConnection.set("server:name",
        "fidonode"));
    console.log("\nCache command: SET Message");
    console.log("Cache response : " + await cacheConnection.set("server:name2",
        "ricardo"));

    console.log("\nCache command: SET Message");
    console.log("Cache response : " + await cacheConnection.set("server:name3",
        "miguel"));

    // Simple get and put of integral data types into the cache
    console.log("\nCache command: GET Message");
    console.log("Cache response : " + await cacheConnection.get("server:name"));

    // Simple get and put of integral data types into the cache
    console.log("\nCache command: GET Message");
    console.log("Cache response : " + await cacheConnection.get("server:name2"));

    // Simple get and put of integral data types into the cache
    console.log("\nCache command: GET Message");
    console.log("Cache response : " + await cacheConnection.get("server:name3"));

    cacheConnection.EXPIRE("server:name2", "5");

    console.log("tiempo faltante" + await cacheConnection.TTL("server:name2"));
    console.log("tiempo faltante" + await cacheConnection.TTL("server:name2"));
    console.log("tiempo faltante" + await cacheConnection.TTL("server:name2"));
    console.log("tiempo faltante" + await cacheConnection.TTL("server:name2"));
    console.log("tiempo faltante" + await cacheConnection.TTL("server:name2"));
    console.log("tiempo faltante" + await cacheConnection.TTL("server:name2"));
    console.log("tiempo faltante" + await cacheConnection.TTL("server:name2"));
    console.log("tiempo faltante" + await cacheConnection.TTL("server:name2"));
    console.log("tiempo faltante" + await cacheConnection.TTL("server:name2"));
    console.log("tiempo faltante" + await cacheConnection.TTL("server:name2"));
  

   


    

   // await cacheConnection.set('frameworks_hash', 'javascript', 'ReactJS', 'css', 'TailwindCSS', 'node', 'Express');

  //  await cacheConnection.get('frameworks_hash', function (err, object) {
 //       console.log(object); // { javascript: 'ReactJS', css: 'TailwindCSS', node: 'Express' }
  //  });


    // Demonstrate "SET Message" executed as expected...
    console.log("\nCache command: GET Message");
    console.log("Cache response : " + await cacheConnection.get("Message"));

    // Get the client list, useful to see if connection list is growing...
    console.log("\nCache command: CLIENT LIST");
    console.log("Cache response : " + await cacheConnection.sendCommand(["CLIENT", "LIST"]));

    console.log("\nDone");
    process.exit();
}

testCache();