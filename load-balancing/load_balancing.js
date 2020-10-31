// Variable declaration
let env;
const net = require('net');
const stringify = require('@andromeda/utils').storeOn;
const parse = require('@andromeda/utils').readFrom; 
const startTime = new Map();
const totalTime = new Map();
const inQueue = new Map();
const timeCapsule = {};

let ports = [];
let onUse = [];

// Helper Functions

// Change the time parameters
const convert = (hrtime) => {
  const nanos = (hrtime[0] * 1e9) + hrtime[1];
  const millis = nanos / 1e6;
  const secs = nanos / 1e9;
  return {secs: secs, millis: millis, nanos: nanos};
};

// Normalize all values (seconds and to microseconds)
const toMillis = (a, b) => (a * 1e9 + b) * 1e-6;

const getport = () => {
  if(!ports) {
    return 1237;
  }
	
  if(onUse[ports[0]] > onUse[ports[1]]){
    onUse[ports[1]]++;
    return ports[1];    
  } else {
    onUse[ports[1]]++;
    return ports[1];
  }
}
const connClient = (func, args) => {
  var client = new net.Socket();
  var port = getport();
  
  client.connect(port, 'localhost', function() {
      client.write(func + '@@div@@' + args);
  });

  client.on('data', function(data) {
    onUse[port]--;
    const result = parse(data.toString());
    console.log(result);
    return;
  });

}

// Send the slow function to another node
const scale = (func, thisArg, argumentsList) => {
  const funcSerial = stringify(func);
  const argsSerial = stringify(argumentsList);
  const result = connClient(funcSerial, argsSerial);}

// Check if a functions takes longer than a specific threshold
const checkReq = (target, thisArg, argumentsList) => {
  startup = 12.9;
  functionTime = totalTime.get(target);  
  inLine = inQueue.get(target);

  if (functionTime + (functionTime * inLine) > startup) {
    scale(target, thisArg, argumentsList);
    return Function()   
  } 
}

// Hooks 

// This hook is called before the execution of a function
const onCallPre = (info) => {
  if (!totalTime.has(info.target)){
    inQueue.set(info.target, 0);
    startTime.set(info.target, process.hrtime());
  }else{
    return checkReq(info.target, info.thisArg, info.argumentsList);
  }

  inQueue.set(info.target, inQueue.get(info.target) + 1);   
};

// This hook is called after every execution of a function
const onCallPost = (info) => {
  if (!totalTime.has(info.target)) {
    const time = startTime.get(info.target);
    const diff = process.hrtime(time);
    const thisTime = toMillis(diff[0], diff[1]);
  
    env.analysisResult[info.currentModule][info.nameToStore] = thisTime;
    totalTime.set(info.target, thisTime);
  }

  inQueue.set(info.target, inQueue.get(info.target) - 1);
};

// Choose what to do when the execution of program ends
const onExit = () => {
  if (env.conf.print) {
    console.log(JSON.stringify(env.analysisResult, null, 2), 'utf-8');
  }
};

module.exports = (e) => {
  env = e;
  ports = env.conf.ports;
  onUse[ports[0]] = 0;
  onUse[ports[1]] = 0; 
  // We first just track the module exports
  env.conf.context.include = ['module-returns'];

  return {
    onCallPre: onCallPre,
    onCallPost: onCallPost,
    onExit: onExit,
  };
};
