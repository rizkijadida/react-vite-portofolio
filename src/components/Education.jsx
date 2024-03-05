
const Education = () => {
  return (
    <div className="bg bg-indigo-600 static">
      <div className="container mx-auto px-4 justify-center">
        <h1 className="text-center text-3xl font-bold py-5 ">EDUCATION</h1>
        <div className="grid md:gap-20 grid-cols-1 md:grid-cols-2 mt-10">
          <div className="w-full border-hidden rounded-xl shadow-xl mb-10">
            <img
              className="rounded-xl"
              src="https://img.inews.co.id/media/822/files/inews_new/2022/09/19/sma_negeri_1_takengon_aceh_tengah.jpg"
              alt=""
            />
            <a
              href="https://www.instagram.com/sman1takengon/?hl=id"
              className=" flex font-bold justify-center text-2xl"
            >
              SMA Negeri 1 Takengon
            </a>
          </div>
          <div className="w-full border-hidden rounded-xl shadow-lg mb-10">
            <img
              className="rounded-xl"
              src="https://blog-edutore-partner.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2020/05/07145636/kampus-universitas-sumatera-utara-usu-di-kota_210115072905-667.jpg"
              alt=""
            />
            <a
              href="https://www.usu.ac.id/"
              className=" flex font-bold justify-center text-2xl"
            >
              Universitas Sumatera Utara
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
