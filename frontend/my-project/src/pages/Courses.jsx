import { useState ,useEffect } from "react";
import CourseCard from "../components/CourseCard";

const API_URL = "https://learnhub-kt52.vercel.app/api/course";

function Courses() {
  const[courses, setCourses] =useState([]);
  const [loading, setLoading] = useState(true);
  const[error , setError] = useState("");
  const [category, setCategory] = useState('');

  useEffect(()=>{
    async  function fetchCourse(){
      try{
        setLoading(true);
        const response = await fetch(API_URL);
        if(!response.ok) throw new Error('Failed to load courses');
        const data = await response.json();
        setCourses(data);
        setError('');
      }
      catch(err){
        setError(err.message);
      }
      finally{
        setLoading(false);
      }
    }
    fetchCourse();
  }, [])

  const categories =[...new Set(courses.map((c)=> c.category))];
  const filteredCourse = category
  ? courses.filter((c)=> c.category === category)
  : courses;
  return (
    <section className="section container">
     <div className="section-title">
      <h2>All Courses</h2>
      <p>Browse every course available on LearnHub</p>
     </div>

     <div className="toolbar">
      <select value={category} onChange={(e)=> setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat)=>(
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <span className="count-badge">{filteredCourse.length}Courses</span>
     </div>
     {loading && <p>Loading courses...</p>}
     {error && <p className="error-msg">{error}</p>}
     {!loading && !error && filteredCourse.length === 0 &&(
      <p>No courses found.</p>
     )}
     {!loading && !error &&(
      <div className="grid">
        {filteredCourse.map((courses)=>(
          <CourseCard key={Courses._id}course={courses} />
        ))}
      </div>
     )}
    </section>
  );
}

export default Courses;
