import React,{useEffect,useState,useContext} from 'react'
import {UserContext} from '../App';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Profile() {
  const [mypics,setPics] = useState([])
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    fetch('https://tutorspoint-backend.onrender.com/mypost',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      setPics(result.mypost)
    })
  },[])
  useEffect(()=>{
    AOS.init({duration:2000});
 },[]);

  return (
    <div className='home'>
          <div className='tutor' data-aos="fade-left">
          
             <div className='para' data-aos="fade-right">
                 <h1>For Tutors</h1>
                 <p>Lorehere are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly believable.
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there
                  isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>
             </div>

          </div>
   
          <div className='student' data-aos="fade-right" >
          <div className='para' data-aos="fade-left">
                 <h1>For Students</h1>
                 <p>Lorehere are many variations of passages of Lorem Ipsum available, 
                  but the majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly believable.
                  to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition</p>
             </div>
          </div>
       </div>
  )
}
