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
