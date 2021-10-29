import logger from "./logger.js";
import {logStyledMessage} from "./formatted-message.js";
import substitution from "./string-substitutions.js";
import {clear} from "./clear.js";
import asserter from "./assert.js";
import {loggerCounter} from "./count.js";

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
