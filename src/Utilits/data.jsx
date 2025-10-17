import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import studyimg1 from "../assets/images/study-img1.png"
import studyimg2 from "../assets/images/study-img2.png"
import course1 from "../assets/images/TopCourses1.jpg"
import course2 from "../assets/images/TopCourses2.jpg"
import course3 from "../assets/images/TopCourses3.jpg"
import course4 from "../assets/images/TopCourses4.png"
import course5 from "../assets/images/TopCourses5.jpg"
import course6 from "../assets/images/TopCourses6.png"
import course7 from "../assets/images/TopCourses7.png"
import course8 from "../assets/images/TopCourses8.png"
import pickcourse1 from "../assets/images/pickcourse1.jpg"
import pickcourse2 from "../assets/images/pickcourse2.jpg"
import pickcourse3 from "../assets/images/pickcourse3.jpg"
import pickcourse4 from "../assets/images/pickcourse4.jpg"
import learning1 from "../assets/images/learning1.png"
import learning2 from "../assets/images/learning2.png"
import learning3 from "../assets/images/learning3.png"
import learning4 from "../assets/images/learning4.png"
import review1 from "../assets/images/review1.jpg"
import review2 from "../assets/images/review2.jpg"
import review3 from "../assets/images/review3.jpg"

export const studyBannerData = [
  {
    id: 1,
    title: "Best Industry Leaders",
    img: studyimg2,
  },
  {
    id: 2,
    title: "Learn Courses Online",
    img: studyimg1,
  },
  {
    id: 3,
    title: "Book Library & Store",
    img: studyimg1
  },
];

export const topCourses = [
  {
    id: 1,
    img: course1,
    title: "Full Stack Development",
    rating: 4.8,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />],
    students: 4832,
    price: "Rs. 3999"
  },
  {
    id: 2,
    img: course2,
    title: "Python",
    rating: "4.0",
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaRegStar />],
    students: 4077,
    price: "Rs. 3299"
  },
  {
    id: 3,
    img: course3,
    title: "UI/UX Design",
    rating: "5.0",
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 5055,
    price: "Rs. 6599"
  },
  {
    id: 4,
    img: course4,
    title: "DSA - Data Structure & Algorithm with C++",
    rating: 4.7,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />],
    students: 4791,
    price: "Rs. 499"
  },
  {
    id: 5,
    img: course5,
    title: "Game Design",
    rating: 4.7,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />],
    students: 4732,
    price: "Rs. 4499"
  },
  {
    id: 6,
    img: course6,
    title: "Flutter Development",
    rating: "5.0",
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 6711,
    price: "Rs. 5999"
  },
  {
    id: 7,
    img: course7,
    title: "Animation",
    rating: 3.2,
    ratingicon: [<FaStar />, <FaStar />, <FaStarHalfAlt />, <FaRegStar />],
    students: 3143,
    price: "Rs. 2399"
  },
  {
    id: 8,
    img: course8,
    title: "Graphics Design",
    rating: 4.4,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />],
    students: 4561,
    price: "Rs. 3999"
  },
]

export const populartopicdata = [
  {
    id: 1,
    title: "Photoshop"
  },
  {
    id: 2,
    title: "Figma"
  },
  {
    id: 3,
    title: "React Js"
  },
  {
    id: 4,
    title: "JavaScript"
  },
  {
    id: 5,
    title: "Unity With 2D & 3D Games"
  },
  {
    id: 6,
    title: "C Language"
  },
  {
    id: 7,
    title: "Advance IOS"
  },
  {
    id: 8,
    title: "Django"
  },
  {
    id: 9,
    title: "Maya"
  },
  {
    id: 10,
    title: "Advance Flutter"
  },

]

export const learningData = [
  {
    id: 1,
    img: learning1,
    title: "Flexible Classes",
    desc: "You Pick The Schedule"
  },
  {
    id: 2,
    img: learning2,
    title: "Offline Mode",
    desc: "Download Classes"
  },
  {
    id: 3,
    img: learning3,
    title: "Flexible Classes",
    desc: "You Pick The Schedule"
  },
  {
    id: 4,
    img: learning4,
    title: "Educator Help",
    desc: "Always Get Answers"
  },
]

export const pickCourse = [
  {
    id: 1,
    img: pickcourse1,
    title: "iOS Development",
    rating: "5.0",
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 5122,
    price: "Rs. 6999"
  },
  {
    id: 2,
    img: course3,
    title: "UI/UX Design",
    rating: "5.0",
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 5055,
    price: "Rs. 6599"
  },
  {
    id: 3,
    img: pickcourse2,
    title: "AR-VR",
    rating: "4.0",
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaRegStar />],
    students: 4077,
    price: "Rs. 3299"
  },
  {
    id: 4,
    img: course5,
    title: "Game Design",
    rating: 4.7,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />],
    students: 4732,
    price: "Rs. 4499"
  },
  {
    id: 5,
    img: course4,
    title: "DSA - Data Structure & Algorithm with C++",
    rating: 4.7,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />],
    students: 4791,
    price: "Rs. 499"
  },
  {
    id: 6,
    img: pickcourse3,
    title: "Game Development",
    rating: "4.9",
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />],
    students: 4951,
    price: "Rs. 5299"
  },
  {
    id: 7,
    img: course8,
    title: "Graphics Design",
    rating: 4.4,
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalfAlt />],
    students: 4561,
    price: "Rs. 3999"
  },
  {
    id: 8,
    img: pickcourse4,
    title: "Android Development",
    rating: "5.0",
    ratingicon: [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />],
    students: 6711,
    price: "Rs. 5999"
  },
]

export const numbersData = [
  {
    id: 1,
    number: "37500+",
    desc: "Learners & Students"
  },
  {
    id: 2,
    number: "50+",
    desc: "Total Courses"
  },
  {
    id: 3,
    number: "22+",
    desc: "Branch"
  },
  {
    id: 4,
    number: "100%",
    desc: "Success Students"
  }
]

export const reviewData = [
  {
    id: 1,
    img: review1,
    name: "Meet Rakholiya",
    msg: "The unique and internationally recognized course structure that helps students to keep updated with the latest trend and market requirements helps students be prepared for local and international job markets. This is the main reason I choose the institute's red and white group."
  },
  {
    id: 2,
    img: review2,
    name: "Krunal Trada",
    msg: "As the tagline of the red and white institute suggests, one step in changing education chain, they work hard to do so. Either by providing practical knowledge or full back support while getting a job. Due to these reasons, I joined a red and white institute group."
  },
  {
    id: 3,
    img: review3,
    name: "Prit Dobariya",
    msg: "I feel glad that I have chosen to be part of red and white international because, along with knowledge of the extracurricular activities such as personality development, sports week, and technical events such as code light, these all have helped me to grow my self on a different level."
  }
]