// This script captures the execution trace of the injected function

// Define a function to monitor console.log output
function captureConsoleLog() {
    var originalConsoleLog = console.log;
    console.log = function() {
        // You can customize how you capture/log console output here
        console.trace(); // Captures a stack trace
        console.log('Printing injection');
        originalConsoleLog.apply(console, arguments);
    };
}

// Capture console.log output
console.log('outside script');
captureConsoleLog();
