import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Btn, Title } from "../components";
import { startAddingUser } from "../redux/actions/userActions";
import { validatEmail } from "../utils";

const AddUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!name) {
      return alert("Please enter name.");
    } else if (!email) {
      return alert("Please enter email.");
    } else if (validatEmail(email)) {
      return alert("Please add a valid email");
    }
    dispatch(
      startAddingUser({
        id: Number(new Date()),
        name,
        email,
      })
    );
    navigate("/");
  };
  return (
    <>
      <div className="flex-column edit-user">
        <Title text="Add User" />
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

export default AddUsers;
