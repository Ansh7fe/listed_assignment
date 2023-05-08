import React from 'react'
import styles from '../styles/login.module.css';
import AppleIcon from '@mui/icons-material/Apple';
import Image from 'next/image';
import GoogleIcon from '../assets/images/google-icon 1.png'
import { InputBase } from '@mui/material';
import { useSession, signIn, signOut, getSession } from "next-auth/react";
const Login = () => {
	const signGoogle = async () => {
		signIn();
	};
	return (
		<div className={styles.container}>
			<div className={styles.left_half}>
				<h2 className={styles.heading}>Board.</h2>
			</div>
			<div className={styles.right_half}>
				<div className={styles.form_container}>
					<div className={styles.form_header}>
						<p className={styles.bold_text}>Sign in</p>
						Sign into your account
					</div>
					<div className={styles.btn_container}>
						<button className={styles.btn} onClick={signGoogle} type='submit' >
							<Image src={GoogleIcon} />
							{/* <p className={styles.btn_txt}> */}
							Sign in with Google
							{/* </p> */}
						</button>
						<button className={styles.btn}>
							<AppleIcon />
							{/* <p className={styles.btn_txt}> */}
							Sign in with Apple
							{/* </p> */}
						</button>
					</div>
					<form className={styles.form_card}>
						<div className={styles.from_inputContainer}>
							<p className={styles.input_txt}>Email Address</p>
							<InputBase type='email' className={styles.inputField} />
						</div>
						<div className={styles.from_inputContainer}>
							<p className={styles.input_txt}>Password</p>
							<InputBase type='Password' className={styles.inputField} />
						</div>
						<p className={styles.form_links}>Forgot Password ?</p>
						<button className={styles.form_btn}>
							Sign in
						</button>
					</form>
					<p className={styles.register_link}>Don't have an account? <span className={styles.form_links}>Register here</span></p>
				</div>
			</div>
		</div>
	)
}

export default Login