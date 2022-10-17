import { createEmptyRow } from "../utils";
import Btn from "./Btn";
const Table = ({
  headers,
  data,
  keys,
  numRow,
  action = false,
  onAddUpload = null,
  onEdit = null,
  onDelete = null,
  onRemove = null,
  onShare = null,
  currentUser = null,
  name = null,
  anchorKey = null,
}) => {
  const renderAddUpload = () => {
    return (
      onAddUpload && (
        <tr>
          <td>
            <Btn
              className="add-upload"
              label="Add Upload"
              onClickHandler={onAddUpload}
            />
          </td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      )
    );
  };
  const renderEditAction = (id) => {
    return (
      onEdit && (
        <button className="action" onClick={() => onEdit(id)}>
          Edit
        </button>
      )
    );
  };

  const renderDeleteAction = (id) => {
    return (
      onDelete && (
        <span>
          |
          <button className="action" onClick={() => onDelete(id)}>
            Delete
          </button>
        </span>
      )
    );
  };

  const renderRemoveAction = (id) => {
    return (
      onRemove && (
        <button className="action" onClick={() => onRemove(id)}>
          Remove
        </button>
      )
    );
  };

  const renderActions = (id) => {
    return (
      action && (
        <td>
          <p>
            {renderEditAction(id)}
            {renderDeleteAction(id)}
            {renderRemoveAction(id)}
          </p>
        </td>
      )
    );
  };

  const renderTableBody = (collection) => {
    return (
      collection &&
      collection.length > 0 &&
      collection.map((col) => {
        return (
          <tr key={col.id}>
            {keys.map((k, index) => {
              if (k === "user") return <td key={k + index}>{col[k].name}</td>;
              return <td key={k + index}>{col[k]}</td>;
            })}
            {renderActions(col.id)}
          </tr>
        );
      })
    );
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {headers &&
              headers.map((title, index) => {
                return <th key={title + index}>{title}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {data && renderTableBody(data)}
          {data && createEmptyRow(numRow - data.length, headers.length)}
          {renderAddUpload()}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
