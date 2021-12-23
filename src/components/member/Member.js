import react from "react";
import { Link } from "react-router-dom";
import { Button, Alert } from "react-bootstrap";
import styte from "./Member.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Member() {
  const t = ["primary"];
  return (
    <>
      <div>
        <Link to="./addmember">
          {/* <div className="addMember"> */}
            <Button variant="primary" style={styte.addMember} bsPrefix = "a">Thêm tài khoản</Button>
          {/* </div> */}
        </Link>

        {t.map((variant, idx) => (
          <Alert key={idx} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
      </div>
    </>
  );
}
