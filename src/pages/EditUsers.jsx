import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Btn, Title } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { startUpdatingUser } from "../redux/actions/userActions";

const EditUsers = () => {
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const onMount = async () => {
      setName(user.name);
      setEmail(user.email);
    };
    onMount();
  }, [user.name, user.email]);
  const handleSubmit = async () => {
    if (!name) {
      return alert("Please enter name.");
    } else if (!email) {
      return alert("Please enter email.");
    } else if (user?.name === name && user?.email === email) {
      return alert("No changes were made.");
    }
    const updatedUser = {
      id: user.id,
      name: name,
      email: email,
    };
    dispatch(startUpdatingUser(updatedUser));
    navigate("/");
  };
  return (
    <>
      <div className="flex-column edit-user">
        <Title text="Edit User" />
        <div className="input_group">
          <p className="input_label_two">Full Name</p>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Anne hunter"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input_group">
          <p className="input_label_one">Email</p>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="anne.hunter@mail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Btn
          label="Save"
          className="btn_two"
          onClickHandler={() => handleSubmit()}
        />
      </div>
    </>
  );
};

export default EditUsers;
