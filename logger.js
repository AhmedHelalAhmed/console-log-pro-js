export default  {
    logGeneralMessage: () => {
        console.log('This is a general message');
    },
    logInformationMessage: () => {
        // The same like log but new alias
        console.info('This is an informative message');
    },
    logDebugMessage: () => {
        // The same like log but new alias
        console.debug('This is a debug message');
    },
    logErrorMessage: () => {
        console.error('This is an error message');
    },
    logWarningMessage: () => {
        console.warn('This is a warning message');
    }

}