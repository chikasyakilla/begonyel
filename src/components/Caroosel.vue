<template>
  <div id="Caroosel">
    <div class="container">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators justify-content-lg-start">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active p-2">
            <img src="../assets/logotoday.png" class="d-block w-100" />
          </div>
          <div class="carousel-item p-2">
            <img src="../assets/bakso 2.png" class="img-banner d-block w-100" />
          </div>
          <div class="carousel-item p-2">
            <img src="../assets/sate-ayam 3.png" class="img-sate d-block w-100" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <i class="fas fa-arrow-circle-left"></i>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
           <i class="fas fa-arrow-circle-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

    <script>
export default {
  name: "Caroosel",
};
</script>

    <style>
    #Caroosel .img-banner{
      width: 100%;
      height: 374px;
      object-fit: cover;
      border-radius: 30px;
    }
    #Caroosel .img-sate{
      width: 100%;
      height: 374px;
      object-fit: cover;
      border-radius: 30px;
    }
</style>