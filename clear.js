// console.clear() was prevented due to 'Preserve log'
export function clear() {
    const wantToClearConsole = confirm('Attention this will clear the console. Are you sure?');
    if (wantToClearConsole) {
        console.clear();
        console.warn('console should cleared')
    }
}
