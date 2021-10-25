const logStyledMessage = (message, style) => {
    console.log(
        `%c ${message}`,
        style
    );
};

logStyledMessage(
    'This indicate unexpected action',
    'color:white;background-color:red;font-style:italic'
);

logStyledMessage(
    'This indicate expected action',
    'color:white;background-color:green;font-style:italic'
);

logStyledMessage(
    'This indicate an action',
    'color:white;background-color:orange;font-style:italic'
);



