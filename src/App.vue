<script setup>
import SwiperItem from "./components/SwiperItem.vue";
</script>

<script>
import axios from "axios";

export default {
  components: {
    SwiperItem,
  },
  data() {
    return {
      students: [],
      just23: false,
      pop: false,
      student: {},
      pops: false,
    };
  },
  created() {
    this.fetchdata();
  },
  methods: {
    popmenuu(){
      this.just2 =  !this.just2 
      this.pops = !this.pops
    },
    async fetchdata() {
      await axios.get(import.meta.env.VITE_API_KEY).then((response) => {
        for (let i of response.data.data) {
          let obj = {
            name: i[0],
            id: i[1],
            subjects: [],
          };
          i[2].length > 0
            ? obj.subjects.push({ title: "English", teacher: i[2], mark: i[3] })
            : false;
          i[4].length > 0
            ? obj.subjects.push({ title: "Math", teacher: i[4], mark: i[5] })
            : false;
          i[6].length > 0
            ? obj.subjects.push({ title: "IT", teacher: i[6], mark: i[7] })
            : false;

          this.students.push(obj)
        }
      });
    },
    param(item){
      if(item == 'abs'){
        return "abs"
      }else{
        let max = item.split("/")[1]
        let mark = item.split("/")[0]
        return Math.round(mark / (max / 100) ) + '%'
      }
      
    },
    params(item){
      if(item == 'abs'){
        return "abs"
      }else{
        let max = item.split("/")[1]
        let mark = item.split("/")[0]
        return Math.round(mark / (max / 100) ) 
      }
      
    },
    validator() {
      event.target.value = event.target.value.toUpperCase();
      for (let i = 2; i < 6; i++) {
        if (event.target.value[i]) {
          if (
            event.target.value[i].charCodeAt() > 47 &&
            event.target.value[i].charCodeAt() < 58
          ) {
          } else {
            event.target.value = event.target.value.substr(
              0,
              event.target.value.length - 1
            );
          }
        }
      }
      for (let i = 0; i < 2; i++) {
        if (event.target.value[i]) {
          if (
            event.target.value[i].charCodeAt() > 64 &&
            event.target.value[i].charCodeAt() < 91
          ) {
          } else {
            event.target.value = event.target.value.substr(
              0,
              event.target.value.length - 1
            );
          }
        }
      }
    },
    popup(item){
      this.pop = true
      this.student = item
    },
    rest() {
      if (event.target.children[1].value.length < 4) {
        event.target.children[1].style.border = "2px solid red";
      } else {  
        let check = document.querySelector(".h-captcha");

        if ( check.children.length > 0) {
          if (check.children[2].value.length > 0) {
            for(let i of this.students){
              if(i.id == event.target.children[1].value){
                this.popup(i)
              }

            }

          } else {
            check.children[1].style.border = "2px solid red";
            
          }
        }
        if(check.children.length == 0){
          for(let i of this.students){
              if(i.id == event.target.children[1].value){
                this.popup(i)
              }

            }
        }
      }
    },
    slide() {
      const swiper = document.querySelector(".swiper").swiper;
      event.currentTarget.id == "prev"
        ? swiper.slidePrev()
        : swiper.slideNext();
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="top">
      <div class="wrapper">
        If you are not satisfied with the result or facing problems with checking your results, feel free to contact the number below. 
      </div>
    </div>
    <div class="bottom">
      <div class="wrapper">
        <figure>
          <img src="./assets/image3.png" alt="Logo" />
        </figure>
        <div class="right">
          <p>
            CONTACT US
            <span></span>
            <a href="tel:+1 606 945 1063">+1 606 945 1063</a>
          </p>
          <a href="https://www.linkedin.com/uas/login?session_redirect=%2Fschool%2F6729">
            <svg
          width="20"
          height="20"
          fill="white"
          xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"/>
          </svg>
          </a>
          <a href="https://m.facebook.com/MiamiUniversity">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.53868 4.88758V7.17758H5.86035V9.97758H7.53868V18.2992H10.9837V9.97841H13.2962C13.2962 9.97841 13.5129 8.63591 13.6179 7.16758H10.9979V5.25258C10.9979 4.96675 11.3729 4.58175 11.7445 4.58175H13.6229V1.66675H11.0695C7.45285 1.66675 7.53868 4.46925 7.53868 4.88758Z"
              fill="#F8F8F8"
            />
          </svg>
          </a>
          
        <a href="https://instagram.com/miamiuniversity?igshid=MzRlODBiNWFlZA==">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.0003 7.29175C9.28203 7.29175 8.59316 7.57709 8.08525 8.085C7.57733 8.59291 7.29199 9.28179 7.29199 10.0001C7.29199 10.7184 7.57733 11.4073 8.08525 11.9152C8.59316 12.4231 9.28203 12.7084 10.0003 12.7084C10.7186 12.7084 11.4075 12.4231 11.9154 11.9152C12.4233 11.4073 12.7087 10.7184 12.7087 10.0001C12.7087 9.28179 12.4233 8.59291 11.9154 8.085C11.4075 7.57709 10.7186 7.29175 10.0003 7.29175Z"
              fill="#F8F8F8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.64168 2.56845C8.53837 2.24737 11.4617 2.24737 14.3583 2.56845C15.9408 2.74512 17.2167 3.99095 17.4025 5.57928C17.746 8.51649 17.746 11.4837 17.4025 14.4209C17.2167 16.0093 15.9408 17.2551 14.3592 17.4326C11.4622 17.7538 8.53864 17.7538 5.64168 17.4326C4.05918 17.2551 2.78335 16.0093 2.59751 14.4218C2.25395 11.4843 2.25395 8.51677 2.59751 5.57928C2.78335 3.99095 4.05918 2.74512 5.64168 2.56845ZM14.1667 5.00012C13.9457 5.00012 13.7337 5.08791 13.5774 5.24419C13.4211 5.40047 13.3333 5.61243 13.3333 5.83345C13.3333 6.05446 13.4211 6.26642 13.5774 6.4227C13.7337 6.57898 13.9457 6.66678 14.1667 6.66678C14.3877 6.66678 14.5997 6.57898 14.7559 6.4227C14.9122 6.26642 15 6.05446 15 5.83345C15 5.61243 14.9122 5.40047 14.7559 5.24419C14.5997 5.08791 14.3877 5.00012 14.1667 5.00012ZM6.04168 10.0001C6.04168 8.9503 6.45872 7.94348 7.20105 7.20115C7.94338 6.45882 8.9502 6.04178 10 6.04178C11.0498 6.04178 12.0566 6.45882 12.799 7.20115C13.5413 7.94348 13.9583 8.9503 13.9583 10.0001C13.9583 11.0499 13.5413 12.0567 12.799 12.7991C12.0566 13.5414 11.0498 13.9584 10 13.9584C8.9502 13.9584 7.94338 13.5414 7.20105 12.7991C6.45872 12.0567 6.04168 11.0499 6.04168 10.0001Z"
              fill="#F8F8F8"
            />
          </svg>
        </a>
         
        <a href="https://youtube.com/@miamiuniversity?feature=shared">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_3_45)">
              <path
                d="M10.0638 2.49878H10.175C11.2025 2.50253 16.4088 2.54003 17.8125 2.91753C18.2369 3.03274 18.6236 3.25731 18.934 3.56879C19.2443 3.88027 19.4675 4.26776 19.5813 4.69253C19.7075 5.16753 19.7963 5.79628 19.8563 6.44503L19.8688 6.57503L19.8963 6.90003L19.9063 7.03003C19.9875 8.17253 19.9975 9.24253 19.9988 9.47628V9.57003C19.9975 9.81253 19.9863 10.955 19.8963 12.145L19.8863 12.2763L19.875 12.4063C19.8125 13.1213 19.72 13.8313 19.5813 14.3538C19.4679 14.7787 19.2448 15.1664 18.9344 15.4779C18.6239 15.7895 18.237 16.0139 17.8125 16.1288C16.3625 16.5188 10.8513 16.5463 10.0875 16.5475H9.91C9.52375 16.5475 7.92625 16.54 6.25125 16.4825L6.03875 16.475L5.93 16.47L5.71625 16.4613L5.5025 16.4525C4.115 16.3913 2.79375 16.2925 2.185 16.1275C1.76061 16.0128 1.37383 15.7885 1.06341 15.4772C0.75298 15.1659 0.529809 14.7785 0.41625 14.3538C0.2775 13.8325 0.185 13.1213 0.1225 12.4063L0.1125 12.275L0.1025 12.145C0.0408095 11.298 0.00662483 10.4492 0 9.60003L0 9.44628C0.0025 9.17753 0.0125 8.24878 0.08 7.22378L0.08875 7.09503L0.0925 7.03003L0.1025 6.90003L0.13 6.57503L0.1425 6.44503C0.2025 5.79628 0.29125 5.16628 0.4175 4.69253C0.530867 4.26759 0.753953 3.87992 1.06439 3.56838C1.37483 3.25685 1.76171 3.03239 2.18625 2.91753C2.795 2.75503 4.11625 2.65503 5.50375 2.59253L5.71625 2.58378L5.93125 2.57628L6.03875 2.57253L6.2525 2.56378C7.44214 2.5255 8.63226 2.50425 9.8225 2.50003H10.0638V2.49878ZM8 6.51128V12.5338L13.1963 9.52378L8 6.51128Z"
                fill="#F8F8F8"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_45">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
         
        <a href="https://twitter.com/miamiuniversity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.7165 4.99992C18.0749 5.29159 17.3832 5.48325 16.6665 5.57492C17.3999 5.13325 17.9665 4.43325 18.2332 3.59159C17.5415 4.00825 16.7749 4.29992 15.9665 4.46659C15.3082 3.74992 14.3832 3.33325 13.3332 3.33325C11.3749 3.33325 9.77487 4.93325 9.77487 6.90825C9.77487 7.19159 9.8082 7.46659 9.86654 7.72492C6.89987 7.57492 4.2582 6.14992 2.49987 3.99159C2.19154 4.51659 2.01654 5.13325 2.01654 5.78325C2.01654 7.02492 2.64154 8.12492 3.6082 8.74992C3.01654 8.74992 2.46654 8.58325 1.9832 8.33325V8.35825C1.9832 10.0916 3.21654 11.5416 4.84987 11.8666C4.32548 12.0101 3.77495 12.0301 3.24154 11.9249C3.46788 12.6353 3.91115 13.2569 4.50905 13.7024C5.10695 14.1478 5.82941 14.3947 6.57487 14.4083C5.31123 15.4086 3.74487 15.9493 2.1332 15.9416C1.84987 15.9416 1.56654 15.9249 1.2832 15.8916C2.86654 16.9083 4.74987 17.4999 6.76654 17.4999C13.3332 17.4999 16.9415 12.0499 16.9415 7.32492C16.9415 7.16659 16.9415 7.01658 16.9332 6.85825C17.6332 6.35825 18.2332 5.72492 18.7165 4.99992Z"
              fill="#F8F8F8"
            />
          </svg>
        </a>
          
        </div>
        <div @click="popmenuu" class="popup" >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div v-if="this.pops" class="popmenu popmenuactive">
          <p style="display: flex; justify-content: center;width:100%; color: white; margin-top: 15px">
            CONTACT US
            <span ></span>
            <a style="color: white" href="tel:+1 606 945 1063">+1 606 945 1063</a>
          </p>
          <br>
         <div class="inner">
          <a href="https://www.linkedin.com/uas/login?session_redirect=%2Fschool%2F6729">
            <svg
          width="20"
          height="20"
          fill="white"
          xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"/>
          </svg>
          </a>
          <a href="https://m.facebook.com/MiamiUniversity">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M7.53868 4.88758V7.17758H5.86035V9.97758H7.53868V18.2992H10.9837V9.97841H13.2962C13.2962 9.97841 13.5129 8.63591 13.6179 7.16758H10.9979V5.25258C10.9979 4.96675 11.3729 4.58175 11.7445 4.58175H13.6229V1.66675H11.0695C7.45285 1.66675 7.53868 4.46925 7.53868 4.88758Z"
              fill="#F8F8F8"
            />
          </svg>
          </a>
          
        <a href="https://instagram.com/miamiuniversity?igshid=MzRlODBiNWFlZA==">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.0003 7.29175C9.28203 7.29175 8.59316 7.57709 8.08525 8.085C7.57733 8.59291 7.29199 9.28179 7.29199 10.0001C7.29199 10.7184 7.57733 11.4073 8.08525 11.9152C8.59316 12.4231 9.28203 12.7084 10.0003 12.7084C10.7186 12.7084 11.4075 12.4231 11.9154 11.9152C12.4233 11.4073 12.7087 10.7184 12.7087 10.0001C12.7087 9.28179 12.4233 8.59291 11.9154 8.085C11.4075 7.57709 10.7186 7.29175 10.0003 7.29175Z"
              fill="#F8F8F8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.64168 2.56845C8.53837 2.24737 11.4617 2.24737 14.3583 2.56845C15.9408 2.74512 17.2167 3.99095 17.4025 5.57928C17.746 8.51649 17.746 11.4837 17.4025 14.4209C17.2167 16.0093 15.9408 17.2551 14.3592 17.4326C11.4622 17.7538 8.53864 17.7538 5.64168 17.4326C4.05918 17.2551 2.78335 16.0093 2.59751 14.4218C2.25395 11.4843 2.25395 8.51677 2.59751 5.57928C2.78335 3.99095 4.05918 2.74512 5.64168 2.56845ZM14.1667 5.00012C13.9457 5.00012 13.7337 5.08791 13.5774 5.24419C13.4211 5.40047 13.3333 5.61243 13.3333 5.83345C13.3333 6.05446 13.4211 6.26642 13.5774 6.4227C13.7337 6.57898 13.9457 6.66678 14.1667 6.66678C14.3877 6.66678 14.5997 6.57898 14.7559 6.4227C14.9122 6.26642 15 6.05446 15 5.83345C15 5.61243 14.9122 5.40047 14.7559 5.24419C14.5997 5.08791 14.3877 5.00012 14.1667 5.00012ZM6.04168 10.0001C6.04168 8.9503 6.45872 7.94348 7.20105 7.20115C7.94338 6.45882 8.9502 6.04178 10 6.04178C11.0498 6.04178 12.0566 6.45882 12.799 7.20115C13.5413 7.94348 13.9583 8.9503 13.9583 10.0001C13.9583 11.0499 13.5413 12.0567 12.799 12.7991C12.0566 13.5414 11.0498 13.9584 10 13.9584C8.9502 13.9584 7.94338 13.5414 7.20105 12.7991C6.45872 12.0567 6.04168 11.0499 6.04168 10.0001Z"
              fill="#F8F8F8"
            />
          </svg>
        </a>
         
        <a href="https://youtube.com/@miamiuniversity?feature=shared">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_3_45)">
              <path
                d="M10.0638 2.49878H10.175C11.2025 2.50253 16.4088 2.54003 17.8125 2.91753C18.2369 3.03274 18.6236 3.25731 18.934 3.56879C19.2443 3.88027 19.4675 4.26776 19.5813 4.69253C19.7075 5.16753 19.7963 5.79628 19.8563 6.44503L19.8688 6.57503L19.8963 6.90003L19.9063 7.03003C19.9875 8.17253 19.9975 9.24253 19.9988 9.47628V9.57003C19.9975 9.81253 19.9863 10.955 19.8963 12.145L19.8863 12.2763L19.875 12.4063C19.8125 13.1213 19.72 13.8313 19.5813 14.3538C19.4679 14.7787 19.2448 15.1664 18.9344 15.4779C18.6239 15.7895 18.237 16.0139 17.8125 16.1288C16.3625 16.5188 10.8513 16.5463 10.0875 16.5475H9.91C9.52375 16.5475 7.92625 16.54 6.25125 16.4825L6.03875 16.475L5.93 16.47L5.71625 16.4613L5.5025 16.4525C4.115 16.3913 2.79375 16.2925 2.185 16.1275C1.76061 16.0128 1.37383 15.7885 1.06341 15.4772C0.75298 15.1659 0.529809 14.7785 0.41625 14.3538C0.2775 13.8325 0.185 13.1213 0.1225 12.4063L0.1125 12.275L0.1025 12.145C0.0408095 11.298 0.00662483 10.4492 0 9.60003L0 9.44628C0.0025 9.17753 0.0125 8.24878 0.08 7.22378L0.08875 7.09503L0.0925 7.03003L0.1025 6.90003L0.13 6.57503L0.1425 6.44503C0.2025 5.79628 0.29125 5.16628 0.4175 4.69253C0.530867 4.26759 0.753953 3.87992 1.06439 3.56838C1.37483 3.25685 1.76171 3.03239 2.18625 2.91753C2.795 2.75503 4.11625 2.65503 5.50375 2.59253L5.71625 2.58378L5.93125 2.57628L6.03875 2.57253L6.2525 2.56378C7.44214 2.5255 8.63226 2.50425 9.8225 2.50003H10.0638V2.49878ZM8 6.51128V12.5338L13.1963 9.52378L8 6.51128Z"
                fill="#F8F8F8"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_45">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
         
        <a href="https://twitter.com/miamiuniversity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.7165 4.99992C18.0749 5.29159 17.3832 5.48325 16.6665 5.57492C17.3999 5.13325 17.9665 4.43325 18.2332 3.59159C17.5415 4.00825 16.7749 4.29992 15.9665 4.46659C15.3082 3.74992 14.3832 3.33325 13.3332 3.33325C11.3749 3.33325 9.77487 4.93325 9.77487 6.90825C9.77487 7.19159 9.8082 7.46659 9.86654 7.72492C6.89987 7.57492 4.2582 6.14992 2.49987 3.99159C2.19154 4.51659 2.01654 5.13325 2.01654 5.78325C2.01654 7.02492 2.64154 8.12492 3.6082 8.74992C3.01654 8.74992 2.46654 8.58325 1.9832 8.33325V8.35825C1.9832 10.0916 3.21654 11.5416 4.84987 11.8666C4.32548 12.0101 3.77495 12.0301 3.24154 11.9249C3.46788 12.6353 3.91115 13.2569 4.50905 13.7024C5.10695 14.1478 5.82941 14.3947 6.57487 14.4083C5.31123 15.4086 3.74487 15.9493 2.1332 15.9416C1.84987 15.9416 1.56654 15.9249 1.2832 15.8916C2.86654 16.9083 4.74987 17.4999 6.76654 17.4999C13.3332 17.4999 16.9415 12.0499 16.9415 7.32492C16.9415 7.16659 16.9415 7.01658 16.9332 6.85825C17.6332 6.35825 18.2332 5.72492 18.7165 4.99992Z"
              fill="#F8F8F8"
            />
          </svg>
        </a>
         </div>
        </div>
      </div>
    </div>
  </header>
  <main class="main">
    <div class="wrapper">
      <div class="left">
        <div class="stars">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
          >
            <path
              d="M11 0L13.5863 7.44033L21.4616 7.60081L15.1846 12.3597L17.4656 19.8992L11 15.4L4.53436 19.8992L6.81535 12.3597L0.538379 7.60081L8.41374 7.44033L11 0Z"
              fill="#BBBDC3"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
          >
            <path
              d="M11 0L13.5863 7.44033L21.4616 7.60081L15.1846 12.3597L17.4656 19.8992L11 15.4L4.53436 19.8992L6.81535 12.3597L0.538379 7.60081L8.41374 7.44033L11 0Z"
              fill="#BBBDC3"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
          >
            <path
              d="M11 0L13.5863 7.44033L21.4616 7.60081L15.1846 12.3597L17.4656 19.8992L11 15.4L4.53436 19.8992L6.81535 12.3597L0.538379 7.60081L8.41374 7.44033L11 0Z"
              fill="#BBBDC3"
            />
          </svg>
        </div>
        <h1>CHECK YOUR RESULT</h1>
        <div class="lines"></div>
        <p>
          The official website of the University of Miami provides information about the results of exams to students, teachers and other interested parties. On the site you can find the dates and times of the event, as well as the grades and results obtained by students.
        </p>
        <div class="lines line"></div>
      </div>
      <div class="right">
        <form @submit.prevent="rest()" class="form">
          <h2>
            Your identifier
            <div class="line"></div>
          </h2>
          <input
            @input="validator()"
            placeholder="SM1937"
            maxlength="6"
            type="text"
          />
          <a href="#">Have a question?</a>

          <div
            class="h-captcha"
            data-sitekey="b23a44aa-15df-4549-8563-db159bad8a91"
          ></div>

          <button>
            Check result
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="63"
                height="4"
                viewBox="0 0 63 4"
                fill="none"
              >
                <path
                  d="M61 3.5L62.5 3.5L62.5 0.499997L61 0.499997L61 3.5ZM6.6425e-08 3.5L61 3.5L61 0.499997L-6.6425e-08 0.5L6.6425e-08 3.5Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
              >
                <path d="M10 9L0.25 17.6603L0.25 0.339746L10 9Z" fill="white" />
              </svg>
            </div>
          </button>
        </form>
      </div>
    </div>
    <div class="slider-wrapper">
      <SwiperItem />
      <div class="nav">
        <svg
          class="nav-svg"
          @click="slide()"
          id="prev"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
        >
          <path d="M0 9L9.75 0.339745L9.75 17.6603L0 9Z" fill="#062136" />
        </svg>
        <svg
          class="nav-svg"
          @click="slide()"
          id="next"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
        >
          <path d="M10 9L0.25 17.6603L0.25 0.339746L10 9Z" fill="#062136" />
        </svg>
      </div>
    </div>
    <div v-if="pop" class="popups">
      <div class="popups_wrapper">
        <div class="popups_wrapper_content">
          <h2>{{ this.student.name }}</h2>
          <h2>ID: {{ this.student.id }}</h2>
        </div>
        <hr class="popup_line">
        <div v-for="item of this.student.subjects" :key="item.id" class="popup_item">
          <div>
            <span style="margin-left: 20px">Subject</span>
            <h2>{{ this.student.subjects.indexOf(item) + 1 }}.  {{ item.title }}</h2>
          </div>
          <div>
            <span>Teacher</span>
            <h2> {{ item.teacher }} </h2>
          </div>
          <div>
            <span>Mark</span>
            <h2> {{ this.param(item.mark)  }} </h2>
          </div>
          <div>
            <span>Status</span>
            <!-- style="background-color: #c60002; color: white; padding: 1px 5px" -->
            <h2 class="failed" :class="{passed: this.params(item.mark) >= 50}">
            {{  this.params(item.mark) >= 50? "Passed" : "Failed" }}
            </h2>
          </div>
        </div>
        <button @click="this.pop = false">Close</button>
       </div>
    </div>
  </main>
</template>

<style scoped>
.failed{
  background: #c60002;
  padding: 2px 5px;
  color: white !important;
}
.passed{  
  background: transparent !important;
  color: #c60002 !important;
}
.popup_item{
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.541);
}
.popup_item div{
  flex: 1;
}
.popup_item div:last-child{
  width: max-content;
  flex: initial !important;
}

.popup_item div:nth-last-child(2){
  margin-right: 50px;
  flex: initial !important;
}

.popup_item span{
  color: rgba(0, 0, 0, 0.455);
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
}
.popup_item h2{
  font-family: "DM Serif Display", serif;
  font-weight: 500;
}
.popups_wrapper {
  min-width: 600px;
  padding: 20px;
  background: white;
}
.popups_wrapper button{
  background: #c60002;
  font-family: "DM Serif Display", serif;
  color: white;
  font-size: 18px;
  font-weight: 1000;
  width: 100%;
  cursor: pointer;
  border: none;
  height: 40px;  
  margin-top: 30px;
  outline: none;
}
.popup_line{
  margin-top: 15px;
  margin-bottom: 15px;
  color: #c60002;
  border-color: #c60002;
  height: 1px;
}
.popups_wrapper_content{
  font-family: "DM Serif Display", serif;
  display: flex;
  color: #c60002;
  justify-content: space-between;
  align-items: center;
}
.popups{  
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.353);
  position: fixed;
  left: 0;
  z-index: 999;
  top: 0;
}

@media screen and (max-width: 494px) {
  .popup_item h2{
  font-family: "DM Serif Display", serif;
  font-weight: 500;
  font-size: 18px;
}


}

@media screen and (max-width: 627px) {
  .popups_wrapper{
    width: 95% !important;
    min-width: initial !important;
  }
  .popup_item div[data-v-7a7a37b1]:nth-last-child(2){
  margin-right: 10px;
}
}
.timess :nth-child(1){
  transform: rotate(45deg) translateY(10px) translateX(10px);
}
.timess :nth-child(2){
  transform: rotate(-45deg)  translateY(2px) translateX(-1px);
}
.timess :nth-child(3){
  opacity: 0;
  transform: rotate(45deg);
}
@media screen and (max-width: 430px) {
  .popup_item div[data-v-7a7a37b1]:nth-child(1){
    flex: initial !important; margin-right: 12px;
    width: max-content !important;
  }
}
@media screen and (max-width: 390px) { 
  .popup_item{
    flex-wrap: wrap;
    height: max-content !important;
  }
  .popup_item div{
    flex: initial !important;
  }
}
.popmenuactive{
  height: 100px;
}
</style>
