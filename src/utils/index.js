/**
 * Check if email is valid.
 * @param {string} email
 * @returns boolean
 */
export const validatEmail = (value) => {
  let apos = value.indexOf("@"); // from beginning first item
  let dotpos = value.lastIndexOf("."); // from beginning last item
  return apos < 1 || dotpos - apos < 2;
};

/**
 * Get an item from localStorage
 * @param {string} item
 * @returns object|string|number
 */
export const getItem = (item) => {
  const result = localStorage.getItem(item);
  return JSON.parse(result);
};

/**
 * Check if a user is logged in.
 * @returns boolean
 */
export const isUserLoggedIn = () => {
  return getItem("token") !== null;
};

/**
 * Set an item in the local storage.
 * @param {string} key
 * @param {object|string|number} value
 */
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const formatDate = (d) => {
  const idx = d.indexOf(".");
  return d.replace(/T/g, " ").substring(idx, 0);
};

/**
 * Set an item in the local storage.
 * @param {Number} rowCount
 * @param {Number} columnCount
 */
export const createEmptyRow = (rowCount, columnCount) => {
  if (rowCount <= 0) return;
  const row = [];
  const col = [];
  for (let index = 0; index < rowCount; index++) {
    row.push(index);
  }
  for (let index = 0; index < columnCount; index++) {
    col.push(index);
  }
  return (
    row.length &&
    col.length &&
    row.map((r) => {
      return (
        <tr key={r}>
          {col.map((c) => {
            return <td key={c}>&nbsp;</td>;
          })}
        </tr>
      );
    })
  );
};
