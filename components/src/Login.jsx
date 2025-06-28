import React from 'react'

export const users = 
[
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
]

function Login() {
  return (
    // bunun adi fragment
    <> 
    <div style={{textAlign: 'center',fontSize: '24px',fontWeight: 'bold',marginBottom: '20px' }}>LOGIN</div>
    <form action="" method="submit" style={{ display: 'flex', flexDirection: 'column', width: '200px', gap: '1em' }}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required/>
      </div>
      <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Login