const logMessage = () => {
    console.count('log Message no');
}

for (const logMessageElement of [1, 2, 3]) {
    logMessage();
}