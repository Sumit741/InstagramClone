import React from "react";
import styles from "./EditProfile.module.css";
import { Link } from "react-router-dom";

function EditProfile() {
  return (
    <div className={styles.editContainer}>
      {/*comp */}
      <div className={styles.indivComponent}>
        <div>
          <img src="/pp.png" />
        </div>
        <div
          style={{
            marginTop: "-4px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: "400",
              color: "rgb(38m, 38, 38)",
              alignSelf: "flex-start",
            }}
          >
            gahatrajsumit123
          </span>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "rgb(0, 149, 246)",
              cursor: "pointer",
            }}
          >
            Change profile photo
          </span>
        </div>
      </div>
      {/*comp */}

      {/*comp */}
      <div className={styles.indivComponent}>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input placeholder="Name" />
          <span className={styles.text}>
            Name Help people discover your account by using the name you're
            known by: either your full name, nickname, or business name.
          </span>
          <span className={styles.text}>
            You can only change your name twice within 14 days.
          </span>
        </div>
      </div>
      {/*comp */}

      {/*comp */}
      <div className={styles.indivComponent}>
        <div>
          <label>Username</label>
        </div>
        <div>
          <input placeholder="Name" />
          <span className={styles.text}>
            In most cases, you'll be able to change your username back to
            gahatrajsumit123 for another 14 days.{" "}
            <Link to="/learn">Learn more</Link>
          </span>
        </div>
      </div>
      {/*comp */}

      {/*comp */}
      <div className={styles.indivComponent}>
        <div>
          <label>Website</label>
        </div>
        <div>
          <input placeholder="Website" />
        </div>
      </div>
      {/*comp */}

      {/*comp */}
      <div className={styles.indivComponent}>
        <div>
          <label>Website</label>
        </div>
        <div>
          <textarea />
          <span
            style={{
              marginTop: "30px",
              fontSize: "14px",
              fontWeight: 600,
              color: "rgb(142, 142, 142)",
            }}
          >
            Personal Information
          </span>
          <span
            className={styles.text}
            style={{
              marginTop: "0",
            }}
          >
            Provide your personal information, even if the account is used for a
            business, a pet or something else. This won't be a part of your
            public profile.
          </span>
        </div>
      </div>
      {/*comp */}
      {/*comp */}
      <div className={styles.indivComponent}>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input placeholder="Email" />
        </div>
      </div>
      {/*comp */}
      {/*comp */}
      <div className={styles.indivComponent}>
        <div>
          <label>Phone number</label>
        </div>
        <div>
          <input placeholder="Phone number" />
        </div>
      </div>
      {/*comp */}
      <div className={styles.indivComponent}>
        <div>
          <label>Gender</label>
        </div>
        <div>
          <input placeholder="Gender" />
        </div>
      </div>
      {/*comp */}
      <div className={styles.indivComponent}>
        <div
          style={{
            width: "150px",
          }}
        >
          <label style={{ textAlign: "end", marginTop: "-2px" }}>
            Similar account suggestions
          </label>
        </div>
        <div>
          <div className={styles.termsCondi}>
            <input type="checkbox" />
            <span style={{}}>
              Include your account when recommending similar accounts people
              might want to follow. <Link to="/?">[?]</Link>
            </span>
          </div>

          <div className={styles.footEdit}>
            <button>Submit</button>
            <Link to="/deactivate">Temporarily deactivate my account</Link>
          </div>
        </div>
      </div>
      {/*comp */}
    </div>
  );
}

export default EditProfile;
