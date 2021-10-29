import logger from "./logger.js";
import {logStyledMessage} from "./formatted-message.js";
import substitution from "./string-substitutions.js";
import {clear} from "./clear.js";
import asserter from "./assert.js";
import {loggerCounter} from "./count.js";
import quotesService from "./quotes-service.js";

logger.logGeneralMessage();
logger.logInformationMessage();
logger.logDebugMessage();
logger.logErrorMessage();
logger.logWarningMessage();

clear();

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

clear();

substitution.stringSubstitution('Ahmed');
substitution.numberSubstitution();
substitution.objectSubstitution();

clear();

asserter.caseAssetSuccessThatDoNoThing();
asserter.caseAssetFailedThatThrowErrorWithTraceAndData();

clear();

let iterator = 0;
while (iterator < 3) {
    loggerCounter();
    iterator++
}

clear();

const getFiveQuotes = (isDebug = false) => {
    if (isDebug) {
        console.trace('Here is the trace');
    }
    return quotesService.execute(5);
}

getFiveQuotes().then(quotes => {
    console.log(quotes);
});

clear();


getFiveQuotes().then(quotes => {
    quotes.forEach(quote => {
        console.log(quote)
    });
}).then(() => {
    clear();
});


getFiveQuotes().then(quotes => {
    quotes.forEach(quote => {
        if (quote.author === "Abraham Lincoln") {
            console.warn(quote);
            console.count('Wayne Dyer quotes: ');
        } else if (quote.author === "Thomas Edison") {
            console.error(quote);
        } else {
            console.log(quote);
        }
    });
}).then(() => {
    clear();
});


getFiveQuotes().then(quotes => {
    console.table(quotes);
}).then(() => {
    clear();
});


getFiveQuotes().then(quotes => {
    console.group('quotes list');
    quotes.forEach((quote, index) => {
        const {author, text} = quote;
        console.groupCollapsed(`quote: ${index + 1}`);
        console.log(author);
        console.warn('said');
        console.log(text);
        console.groupEnd();
    });
    console.groupEnd();

}).then(() => {
    clear();
});


quotesService.execute(500).then(quotes => {
    console.time('Time for foreach');
    quotes.forEach(quote => {
        console.count();
    });
    console.timeEnd('Time for foreach');
});


quotesService.execute(500).then(quotes => {
    console.time('Time for table');
    console.table(quotes);
    console.timeEnd('Time for table');

}).then(() => {
    clear();
});


function getOneQuote() {
    return getFiveQuotes(confirm('Trace?'))
        .then(quotes => quotes.splice(0, 1));
}

getOneQuote().then((quotes) => {
    console.dir(quotes);
    console.log(quotes);
});

// console.memory => should used in browser not in code