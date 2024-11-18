export function getPropertiesConfig(key: string): string {
    const CONFIG_PROPERTIES = process.env;

    if (CONFIG_PROPERTIES[key] != undefined || CONFIG_PROPERTIES[key] != null) {
        return CONFIG_PROPERTIES[key];
    } else {
        throw new Error(`env doesn't have property like ${key}`);
    }
}