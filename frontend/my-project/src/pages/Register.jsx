import { useState } from "react";

const API_URL = "https://learnhub-kt52.vercel.app/api/students";


const initialForm ={name:"", email: '', age: '', city: '', course: '', phone: ''};

function Register() {
const [formData , setFormData]= useState(initialForm);
const [success, setSuccess]= useState('');
const [error, setError] = useState('');

function handleChange(e){
  const {name, value} = e.target;
  setFormData({...formData, [name]: value});
}

async function handleSubmit(e){
  e.preventDefault();
  setSuccess('');
  setError('');

  const {name, email, age, city, course, phone}= formData;
  if(!name || !email || !age || !city || !course || !phone){
    setError('Please fill in all fields.');
    return;
  }

  try{
    const response = await fetch(API_URL,{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(formData),
    });
    if(!response.ok) throw new Error('Registration failed.Please try again.');

    setSuccess("Registration successful! We will contect you soon.");
    setFormData(initialForm);
  }
  catch(err){
    setError(err.message);
  }
}
  return (
    <section className="section container">
      <div className="section-title">
        <h2>Student Registration</h2>
        <p>Fill in your details to register for a course</p>
      </div>

      <div className="form-box">
        {success && <p className="success-msg">{success}</p>}
        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input  name="name" value={formData.name}onChange={handleChange}placeholder="Your full name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" value={formData.email}onChange={handleChange} placeholder="your@example.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>age</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange}placeholder="your age"/>
            </div>
            <div className="form-group">
              <label>City</label>
              <input name="city" value={formData.city} onChange={handleChange}placeholder="your city" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Course</label>
              <select name="course" value={formData.course}onChange={handleChange}>
                <option value="">Select a course</option>
                <option value="Web Development">Web Development</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React.js">React.js</option>
              <option value="Node.js">Node.js</option>
              <option value="MongoDB">MongoDB</option>
              <option value="Full Stack Development">Full Stack Development</option>
              </select>
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input name="phone" value={formData.phone}onChange={handleChange}placeholder="03192218535" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Register Student</button>
        </form>
      </div>
    </section>
  );
}

export default Register;
