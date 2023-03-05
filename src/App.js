import React, { useState } from 'react'
import "./App.css"

const App = () => {

  const [rgform, setrgform] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: ""
  })

  const [Record, setRecord] = useState([]);

  const changing = (e) => {
    const val1 = e.target.name;
    const val2 = e.target.value;
    setrgform({ ...rgform, [val1]: val2 })
    // console.log(rgform);
  }

  const submission = (e) => {
    e.preventDefault();

    const record_new = { ...rgform, id: new Date().getTime.toString() }

    setRecord([...Record, record_new])
    // console.log(Record)
    setrgform({
      fullname: "",
      email: "",
      phone: "",
      password: ""
    })
  }

  return (
    <>
      <div className='box1'>
        <form action="" onSubmit={submission} className="box">
          <div className="cont1">
            <div className="contain">
              <h3>Full Name</h3>
              <input type="text" name="fullname" id="FullName" value={rgform.fullname}
                onChange={changing} autoComplete="off" required
                placeholder='Write Name Here...'
              />
            </div>

            <div className="contain">
              <h3>Email</h3>
              <input type="email" name="email" id="Email" value={rgform.email}
                onChange={changing} autoComplete="off" required
                placeholder='Write Email Here...'
              />
            </div>

            <div className="contain">
              <h3>Phone no.</h3>
              <input type="number" name="phone" id="Phone No." value={rgform.phone}
                onChange={changing} autoComplete="off" required
                placeholder='Enter Contact Here...'
              />
            </div>

            <div className="contain">
              <h3>Password</h3>
              <input type="password" name="password" id="Password" value={rgform.password}
                onChange={changing} autoComplete="off" required
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
        {/* <h3>
          hello world
        </h3> */}
        {/* map method is used here to destructure the array of objects. */}
        {Record.map((e) => {
          return (
            <div className="contain2">
              <div className="bar">
                <p>{e.fullname}</p>
                <p>{e.email}</p>
                <p>{e.phone}</p>
                <p>{e.password}</p>
              </div>
            </div>
          )
        }
        )
        }
      </div>

    </>
  )
}


export default App