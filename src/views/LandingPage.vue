<template>
  <div id="Landing-page">
    <!-- <h1> ini adalah halaman Landing page</h1> -->
    <Header />
    <Banner />
    <div class="mt-5"></div>
    <Caroosel />
    <div class="judul-menu my-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-sm-6 col-6">
            <h5><b>Menu</b> Kami</h5>
          </div>
          <div class="col-lg-6 text-right">
            <h5><i class="fas fa-eye" style="color:#EC982E;"></i> Lihat Semua</h5>
          </div>
        </div>
      </div>
    </div>
    <Product />
        <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Caroosel from "@/components/Caroosel.vue";
import Product from '@/components/Product.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "LandingPage",
  components: {
    Header,
    Banner,
    Caroosel,
    Product,
    Footer,
  },
};
</script>

<style>
#Landing-page h2{
    font-size: 35px;
}
/* #Landing-page .fa-eye{
    font-size: 
} */
</style>