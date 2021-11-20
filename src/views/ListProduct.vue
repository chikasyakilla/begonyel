<template>
  <div id="ListProduct">
    <Header />
    <div id="Breadcrumb">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-white">
                <li class="breadcrumb-item">
                  <router-link to= "/">
                  <a href="#"><i class="fas fa-home"></i> Home</a>
                   </router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  <b style="color: #000000">ListProduct</b>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="Search">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-12">
            <div class="input-group md-form form-sm form-2 pl-0">
              <input
                class="form-control my-0 py-1 amber-border"
                type="text"
                placeholder="Mau Makan Apa Hari Ini"
                aria-label="Search"
              />
              <div class="input-group-append">
                <span class="input-group-text amber lighten-3" id="basic-text1"
                  ><i class="fas fa-search text-grey" aria-hidden="true"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Product />
    <Product />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Product from "@/components/Product.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ListProduct",
  components: {
    Header,
    Product,
    Footer,
  },
};
</script>

<style>
#ListProduct #Breadcrumb .fa-home {
  color: #ec982e;
}
#ListProduct #Breadcrumb a {
  color: black;
  text-decoration: none;
}
</style>