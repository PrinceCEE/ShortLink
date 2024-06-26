const Store = new Map<string, string>();

const getStore = () => Store;

/**
 *
 * @param key The generated short id for the long url
 * @param value The long url
 */
const set = (key: string, value: string) => {
  Store.set(key, value);
};

const get = (key: string) => Store.get(key);

const del = (key: string) => {
  Store.delete(key);
};

export default { set, get, del, getStore };
