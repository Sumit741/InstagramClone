import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import styles from "./Settings.module.css";

function Settings() {
  return (
    <div
      style={{
        marginBottom: "180px",
      }}
    >
      <div className={styles.settingsContainer}>
        <div className={`${styles.leftContainer} profileEdit`}>
          <NavLink to="/settings/edit">Edit Profile</NavLink>
          <NavLink to="/">Change Password</NavLink>
          <NavLink to="/">Apps and websites</NavLink>
          <NavLink to="/">Email notifications</NavLink>
          <NavLink to="/">Push notifications</NavLink>
          <NavLink to="/">Manage contacts</NavLink>
          <NavLink to="/">Privacy and security</NavLink>
          <NavLink to="/">Login activity</NavLink>
          <NavLink to="/">Emails from Instagram</NavLink>
          <NavLink to="/">Help</NavLink>

          <Link
            to="/,"
            style={{
              textAlign: "center",
              paddingLeft: "20px",
              width: "90%",
              border: "none",
              background: "none",
              color: "rgb(0, 149, 246)",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "22px",
            }}
          >
            Switch to Professional Account
          </Link>
          <div className={styles.logoSection}>
            <Link to="/">
              <div>
                <img src="/meta.png" />
                <h5>Meta</h5>
              </div>
              <span>Accounts Center</span>
              <span>
                Control settings for connected experiences across Instagram, the
                Facebook app and Messenger, including story and post sharing and
                logging in.
              </span>
            </Link>
          </div>
        </div>

        <div className={styles.Outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Settings;
