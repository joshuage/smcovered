import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { createUser } from '../../actions'

const Login = (props) => {
	// 先试试给服务器发送请求 成功
	const sendRequest = async () => {
		const respones = await axios.get('/login/yuchen')
		console.log(respones)
	}

	// 试试action和reducer
	const handleSub = () => {
		console.log(props.de)
	}
	
	return (
		<div>login
			<div>
				<button onClick={sendRequest} >Send Request</button>
				<hr />
				<div className='ui container'>
					<form>
					<div>
						<label>User name here: </label>
						<input name='username'></input>
					</div>
					<div style={{margin: 20+'px'}}></div>
					<div>
						<label>Ur pwd here: </label>
						<input name='pwd'></input>
					</div>
					
					</form>
					
				</div>
				<hr />
				<button onClick={handleSub}>Create User</button>
			</div>
		</div>
	)
}

const mapStateToProps = (state, preProps) => {
	return {de: state.de}
}

export default connect(mapStateToProps, {createUser})(Login)