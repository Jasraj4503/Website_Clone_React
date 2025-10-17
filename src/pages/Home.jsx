import Banner from "../Layout/Banner";
import Footer from "../Layout/Footer";
import LearningJourney from "../Layout/LearningJourney";
import Navbar from "../Layout/Navbar";
import Numbers from "../Layout/Numbers";
import PickCourse from "../Layout/PickCourse";
import Populartopic from "../Layout/Populartopic";
import Review from "../Layout/Review";
import TopCourse from "../Layout/Top_Courses";
import Why_Study from "../Layout/Why-Study";


function Home() {
    return(
        <>
            <Navbar/>
            <Banner/>
            <Why_Study/>
            <TopCourse/>
            <Populartopic/>
            <LearningJourney/>
            <PickCourse/>
            <Numbers/>
            <Review/>
            <Footer/>
        </>
    )
}

export default Home