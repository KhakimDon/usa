<template>
  <swiper
    :slidesPerView="2"
    :spaceBetween="10"
    :scrollbar="true"
    :navigation="true"
    :pagination="{
      type: 'fraction',
    }"
    :modules="modules"
    :breakpoints="{
      '1440': {
        slidesPerView: 4,
      },
      '555' : {
        spaceBetween: 30
      }
    }"
    class="mySwiper"
  >
    <swiper-slide @click="link(item.link)" v-for="item of this.univers" :key="item.id">
        <div class="slider-wrp">
            <figure>
                <img :src="item.logo" alt="">
            </figure>
            <div>
                <p> {{ item.title }}</p>
                <p class="country"> {{ item.country }}</p>
            </div>
        </div>
    </swiper-slide>
    

  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";

import "swiper/css/scrollbar";

import "../assets/swiper.css";

// import required modules
import { Scrollbar } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    Navigation,
    Pagination
  },
  data(){
    return{
        univers: [
            {
                logo: "https://i.pinimg.com/736x/52/47/75/524775732e56ba48a035918686af5d99--coat-of-arms-dream-come-true.jpg",
                title: "McGill University",
                country: "Canada",
                link: "https://www.mcgill.ca/",
            },
            {
                logo: "https://intercollegiate-registry.org/wp-content/uploads/2018/05/yale-university-seal-768x763.png",
                title: "Yale University",
                country: "USA",
                link: "https://www.yale.edu/",
            },
            
            {
                logo: "https://avatars.dzeninfra.ru/get-zen_doc/1596193/pub_6286741f2e90797eff3e14d0_62867567ac2e1773bf2d3427/scale_1200",
                title: "University of Oxford",
                country: "UK",
                link: "https://www.ox.ac.uk/",
            },
            {
                logo: "https://www.educanada.ca/images/educanada-en.png",
                title: "Ministry of Education of Canada",
                country: "Canada",
                link: "https://www.educanada.ca/index.aspx?lang=eng",
            },
            {
                logo: "src/assets/l.png",
                title: "Mr.Doniyor's School",
                country: "Uzbekistan",
                link: "http://mrdoniyor.com/",
            },
            
            {
                logo: "https://i.pinimg.com/originals/20/ac/4d/20ac4d045fdfaa28e482a976b2bf3661.jpg",
                title: "Stanford University",
                country: "USA",
                link: "https://www.stanford.edu/",
            },
            {
                logo: "https://www.logolynx.com/images/logolynx/fe/fef204e3b4254f0f58de354804916fb6.jpeg",
                title: "U.S.Department of Education",
                country: "USA",
                link: "https://www.ed.gov/",
            },
            {
                logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Seal_of_the_United_States_Department_of_State.svg/1200px-Seal_of_the_United_States_Department_of_State.svg.png",
                title: "Departament of State",
                country: "USA",
                link: "https://www.state.gov/",
            },
            {
                logo: "https://encycolorpedia.com/schools/uk/university-of-manchester.png",
                title: "The University of Manchester",
                country: "UK",
                link: "https://www.manchester.ac.uk/",
            },
            {
                logo: "https://www.pinpng.com/pngs/m/578-5784480_lancaster-university-ghana-logo-hd-png-download.png",
                title: "Lancaster University",
                country: "UK",
                link: "https://www.lancaster.ac.uk/",
            },
            {
                logo: "https://pbs.twimg.com/media/Em-BUdUXYAIDfy7.jpg",
                title: "Universidade Federal do Rio de Janeiro",
                country: "Latin America",
                link: "https://ufrj.br/en/",
            },
            {
                logo: "https://menteargentina.com/images/study-abroad-argentina/study-argentina-uba.jpg",
                title: "University of Buenos Aires",
                country: "Latin America",
                link: "https://www.uba.ar/",
            },

          

            {
                logo: "https://images.squarespace-cdn.com/content/v1/5cac1b0db2cf7974b62c886f/1631527512401-XMZJB3UB5OW1MD5ESA3L/National_University_of_Singapore_logo_NUS_logotype.jpg",
                title: "National University of Singapore",
                country: "Asia",
                link: "https://www.nus.edu.sg/",
            },

            {
                logo: "https://upload-china-admissions.imgix.net/uploads/school_logos/cuhk-logo.png",
                title: "Chinese University of Hong Kong",
                country: "Asia",
                link: "https://cuhk.edu.hk/english/index.html",
            },
            
            {
                logo: "https://www.schrodinger.com/sites/default/files/styles/panopoly_image_original/public/ksau_logo.jpg?itok=vEFVyQX_",
                title: "King Abdulaziz University",
                country: "Asia",
                link: "https://www.kau.edu.sa/home_english.aspx",
            },


        
        ]
    }
  },
  mounted(){
  },
  setup() {
    return {
      modules: [Scrollbar,Pagination, Navigation],
    };
  },
  methods:{
    link(link){
        window.location.href = link
    }
  }
};
</script>