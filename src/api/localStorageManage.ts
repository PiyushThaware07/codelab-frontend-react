const STORAGE_KEY = "codelab";

// Save Data To Local Storage
export const saveToLocalStorage = (data: any) => {
    try {
        const serializedData = JSON.stringify(data);
        const localSavedData = localStorage.getItem(STORAGE_KEY);

        if (localSavedData) {
            // Parse existing data and merge with new data
            const parsedData = JSON.parse(localSavedData);
            const updatedData = JSON.stringify({ ...parsedData, ...data });
            localStorage.setItem(STORAGE_KEY, updatedData);
        } else {
            // No existing data, set new data directly
            localStorage.setItem(STORAGE_KEY, serializedData);
        }
    } catch (error) {
        console.error("Error saving data to localStorage:", error);
    }
};
