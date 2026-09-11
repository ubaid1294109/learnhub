import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import CourseCard from "../components/CourseCard";

const API_URL = "https://learnhub-kt52.vercel.app/api/course";

function Home(){
    const [courses,setCourses]= useState([]);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        async function fetchFeaturedCourses(){
            try{
                const response = await fetch(API_URL);
                const data = await response.json();
                setCourses(data.slice(0, 3)); 
            }
            catch(err){
            console.error("Could not load featured courses:", err.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchFeaturedCourses();
    }, []);

    return(
        <div>
            <section className="hero">
                <h1>learnHub New skills, Anytime, Anywhere </h1>
                <p>leranHub is a student learning platform where you can explore real courses, register, and start building your future - one skill at a time.</p>
                <div className="hero-buttons">
                    <Link to= "/courses" className="btn btn-accent">Explore Courses</Link>
                    <Link to= "/register" className="btn btn-outline">register</Link>
                </div>
            </section>

            <section className="section container">
                <div className="section-title">
                    <h2>Featured Courses</h2>
                    <p>A few of the courses our students love the most</p>
                </div>
                {loading && <p>Loading courses...</p>}
                {!loading && (
                    <div className="grid">
                        {courses.map((course)=>(
                            <CourseCard key={course._id} course={course} />
                        ))}
                    </div>
                )}
            </section>

            <section className="section container">
                <div className="section-title">
                    <h2>why choose learnHub</h2>
                    <p>Everything you need to learn, practice, and grow</p>
                </div>
                <div className="why-us-grid">
                    <div className="icon"></div>
                    <h3>Expert Instructors</h3>
                    <p>learn from instructors who build real softwear every day.</p>
                </div>
                <div className="why-us-card">
                    <div className="icon"></div>
                    <h3>Career Growth</h3>
                    <p>Build the exact skills employers are looking for today.</p>
                </div>
                
            </section>
    

        <section className="stats">
            <div>
                <h3>6+</h3>
                <p>Courses Available</p>
            </div>
            <div>
                <h3>500+</h3>
                <p>Student Enrolled</p>
            </div>
            <div>
                <h3>10+</h3>
                <p>Expert Instructors</p>
            </div>
            <div>
                <h3>95+</h3>
                <p>Satisfaction Rate</p>
            </div>
        </section>
        </div>
        
    )
}
export default Home;
