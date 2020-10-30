// Variable declaration
let env;
const storeTime = new Map();
const timeCapsule = {};

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

// Hooks 

// This hook is called each time we import a module
// and lets the developer have access to the source code
// source <~ the source code of the imported module
// moduleName <~ the name of the required module
const sourceTransform = (info) => {
};

// This hook is called before the execution of a function
const onCallPre = (info) => {
  if (!storeTime.has(info.target))
    storeTime.set(info.target, process.hrtime());
};

// This hook is called after every execution of a function
const onCallPost = (info) => {
  const time = storeTime.get(info.target);
  const diff = process.hrtime(time);
  const thisTime = toMillis(diff[0], diff[1]);
  
  env.analysisResult[info.currentModule][info.nameToStore] = thisTime;
};

// Choose what to do when the execution of program ends
const onExit = () => {
  if (env.conf.print) {
    console.log(JSON.stringify(env.analysisResult, null, 2), 'utf-8');
  }
};

module.exports = (e) => {
  env = e;
  // We first just track the module exports
  env.conf.context.include = ['module-returns'];
  return {
    sourceTransform: sourceTransform,
    onCallPre: onCallPre,
    onCallPost: onCallPost,
    onExit: onExit,
  };
};
