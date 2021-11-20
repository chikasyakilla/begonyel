<template>
  <div id="Tables">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Produk</th>
                <th scope="col">Nama</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Harga</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img src="../assets/nasi-ayam-geprek .png" />
                </th>
                <td>Nasi Geprek Klenger</td>
                <td>Pedes level 3 yaa, mantapp loor</td>
                <td>1</td>
                <td>Rp. 20.000</td>
                <td>
                  <a href="#" class="btn btn-light text-light"
                    ><i class="fas fa-trash"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-lg-8"></div>
        <div class="col-lg-4">
          <div class="Harga text-right justify-content-end">
            <p>
              <b>Total Harga: <span>Rp 20.000</span></b>
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8"></div>
        <div class="col-lg-4">
          <div class="Pesanan">
            <p>Nama Pemesan</p>
            <div class="form-group">
              <input type="nama" class="form-control" />
            </div>
            <p>Nomor Meja</p>
            <div class="form-group">
              <input type="nama" class="form-control" />
            </div>
            <div class="Tombol text-right justify-content-end">
              <router-link to="/Success"
                ><a href="#" class="btn btn-warning text-light"
                  >Pesan Sekarang <i class="fas fa-arrow-right"></i></a
              ></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="Footer">
        <dv class="row">
          <div class="col-lg-12">
            <h6>Copyright Begonyel Palembang - 2021</h6>
          </div>
        </dv>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tables",
};
</script>

<style>
#Tables .table hr {
  border: 1px solid #f57c00;
}

#Tables hr {
  border: 1px solid #f57c00;
  margin-bottom: 27px;
  margin-top: 31px;
}
#Tables img {
  width: 190px;
  height: 157px;
}

#Tables .fa-trash {
  color: red;
}

#Tables .Pesanan {
  margin-top: 71px;
}

#Tables .Pesanan .btn-warning {
  border-radius: 50px;
  margin-top: 15px;
}

#Tables .Pesanan .btn-warning:hover {
  border-radius: 50px;
  transform: scale(1.1);
  background-color: #020f80;
  transition: transform 0.2s;
}

#Tables .Footer h6 {
  background-color: #fdf4f4;
  text-align: center;
  font-family: "Poppins";
  padding-top: 10px;
  margin-top: 675px;
  color: #314728;
  font-size: 15px;
  padding-bottom: 10px;
}
</style>