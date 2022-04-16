export const generateAlphabet = (items) => {
    const singularAlpha = [];
    items.map((x) => {
        if (singularAlpha.indexOf(x.Name.charAt(0)) === -1) {
            singularAlpha.push(x.Name.charAt(0));
        }
    });
    return singularAlpha.sort((a, b) => a.localeCompare(b));
};
export const getIndex = (alphabet, items, autoSort, searchText) => {
    const list = getFilteredData(items, autoSort, searchText);
    const findIndex = list.findIndex((x) => {
        return x.Name.charAt(0) === alphabet;
    });
    return findIndex;
};
export const getFilteredData = (items, autoSort, searchText) => {
    if (autoSort) {
        items.sort((a, b) => a.Name.localeCompare(b.Name));
    }
    return items.filter((l) => l.Name.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1);
};
//# sourceMappingURL=index.js.map