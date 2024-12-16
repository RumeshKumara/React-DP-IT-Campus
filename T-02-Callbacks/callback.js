function openFile(callback){
    // Simulate a time-consuming task

    setTimeout(()=>{
    console.log('Opening file...');
    callback();
    }, 3000)
}

function readFile(){
    console.log('Reading file...');
    // Simulate a time-consuming task
}

function processData(){
    console.log('Processing data...');
    // Simulate a time-consuming task
}

function closeFile(){
    console.log('Closing file...');
    // Simulate a time-consuming task
}

openFile(readFile);