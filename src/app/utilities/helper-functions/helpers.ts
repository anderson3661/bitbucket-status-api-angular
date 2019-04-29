export const goToTopOfPage = (): void => {
    window.scrollTo(0, 0);
}

export const deepClone = (objectOrArrayToDeepClone): object => {
    return JSON.parse(JSON.stringify(objectOrArrayToDeepClone));
}

export const scrollDiv = (div): void => {
    if (div) div.scrollTop = div.scrollHeight - div.clientHeight;
}

export const getPositionInArrayOfObjects = (array, objectProperty, objectValue): number => {
    let i: number = 0;
    let len: number;

    for (i = 0, len = array.length; i < len; i++) {
        if (array[i][objectProperty] === objectValue) return i;
    }
    return -1;
}

export const doesObjectHaveAnyProperties = (object: object): boolean => {
    return Object.keys(object).length > 0;
}

export const getObjectKey = (object: object): string => {
    return Object.keys(object)[0];
}

export const hasObjectValueChanged = (originalObject: object, updatedObject: object, key: string): boolean => {
    return originalObject[key] !== updatedObject[key];
}

export const haveObjectValuesChanged = (originalObject: object, updatedObject: object, key: string): boolean => {
    // This is the same function as in settings-helpers (function = haveSettingsFactorsValuesChanged) so refactor
    let anyChanges: boolean = false;
    const originalValues: string = originalObject[key];
    const updatedValues: string = updatedObject[key];
    Object.entries(originalValues).forEach(([key, val]) => {
        if (val !== updatedValues[key]) anyChanges = true;
    });
    return anyChanges;
};

export const formatDate = (dateOfFixtures: string): string => {
    let monthNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let date: Date = new Date(dateOfFixtures);
    let day: number = date.getDate();
    let monthIndex: number = date.getMonth();
    // let year: number = date.getFullYear();
    let sDaySuffix: string;

    if (day === 1 || day === 21 || day === 31) {
        sDaySuffix = "st";
    } else if (day === 2 || day === 22) {
        sDaySuffix = "nd";
    } else if (day === 3 || day === 23) {
        sDaySuffix = "rd";
    } else {
        sDaySuffix = "th";
    }

    return dateOfFixtures.substr(0, 4) + day + sDaySuffix + ' ' + monthNames[monthIndex];
}

export const getFormattedDate = (date: string): string => {
    const d: Date = new Date(date);
    return ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" + d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
}