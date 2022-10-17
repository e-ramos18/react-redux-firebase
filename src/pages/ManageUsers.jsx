import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title, Table, DeleteUserModal } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  setUsertoUpdate,
  startFetchingUsers,
  startRemovingUser,
} from "../redux/actions/userActions";

const ManageUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onMount = async () => {
      dispatch(startFetchingUsers());
    };
    onMount();
  }, [dispatch]);

  const headers = ["Name", "User Email ID", ""];

  const handleClose = () => setShow(false);

  const onAddUpload = () => {
    navigate("/add");
  };

  const handleEdit = (id) => {
    dispatch(setUsertoUpdate(id));
    navigate(`/edit`);
  };

  const onDeleteUser = () => {
    dispatch(startRemovingUser(userId));
    setShow(false);
  };

  const handleDelete = (id) => {
    setShow(true);
    setUserId(id);
  };

  return (
    <>
      <Title text="Users" />
      <Table
        headers={headers}
        data={users}
        keys={["name", "email"]}
        action
        numRow={8}
        onAddUpload={onAddUpload}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <DeleteUserModal
        handleClose={handleClose}
        show={show}
        deleteUser={onDeleteUser}
        userId={userId}
      />
    </>
  );
};

export default ManageUsers;
