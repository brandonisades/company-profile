import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section id="aboutus">
        
        <section className="mt-10 bg-black text-white flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-5 px-6">
            <div className="flex flex-col space-y-4 m-w-xl">
              <h1 className="text-4xl sm:text-6xl font-extrabold ">Membantu Bisnis Anda Lebih Berteknologi</h1>
                <p className="text-sm sm:text-sm font-extrabold ">Kami adalah perusahaan bidang teknologi yang menawarkan solusi digital yang canggih dan bisa diandalkan</p>
                  <button className="w-[250px] rounded px-4 py-2 text-sm hover:bg-gray-200 transition  bg-white text-black cursor-pointer font-bold">
                    <Link href="/#contact">Hubungi Kami</Link>
                  </button>
            </div>

            <div className="w-full max-w-xl md:mt-0 ml-10">
                <Image 
                    loading="lazy"
                    src="/man3d.png"
                    alt="3d man"
                    width={500}
                    height={500}
                />
            </div>

          </section>        
        
      </section>
      <section id="overview">
        <section className="bg-white py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* gambar */}
              <div className="overflow-hidden rounded shadow-lg max-w-xl md:mt-0">
                <Image 
                    loading="lazy"
                    src="/kantor.jpg"
                    alt="kantor"
                    width={500}
                    height={500}
                    className="rounded-4xl object-cover w-full h-auto"
                />
              </div>
              {/* text */}
          <div >
              <h2 className="text-4xl sm:text-xl md:text-6xl font-bold">Tentang Perusahaan</h2>
              <p className="mt-5 text-lg mb-4 leading-relaxed"> Kami berusaha untuk selalu memberikan best practice pada project yang kami kerjakan
                demi kepuasan dari client-client kami. Berdiri di tahun 2025, Kami mengikuti arus tren teknologi
                yang semakin berkembang pesat.
              </p>
            </div>

          </div>
        </section>
      </section>
      <section id="services">
        <div className="py-25">
          <section className="bg-gray-100 py-16 px-6 md:px-12 ">
            <div className="text-center mb-10">
              {/* judul */}
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
              <p className="text-lg">Layanan teknologi kami dapat membantu bisnis anda tetap pada tren teknologi yang semakin pesat.</p>
            </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {/* box1 */}
                <div className="bg-white  p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <h3 className="text-4xl mb-4 font-bold">Full-stack Web Development</h3>
                  <p>Layanan pembuatan website bagi bisnis anda dari 0 dan bisa terus keep up dengan tren industri teknologi</p>
                </div>
              
              {/* box2 */}
                <div className="bg-white  p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <h3 className="text-4xl mb-4 font-bold">UI UX Design</h3>
                  <p>Jadikan tampilan website atau aplikasi anda lebih mutakhir dan mudah untuk dipakai!</p>
                </div>

              {/* box3 */}
              <div className="bg-white  p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <h3 className="text-4xl mb-4 font-bold">Digital Marketing</h3>
                  <p>Layanan kami membantu bisnis dan brand meningkatkan kehadiran online mereka melalui berbagai strategi pemasaran digital, seperti SEO, media sosial, iklan online, dan lain-lain.</p>
                </div>

            </div>
          </section>
        </div>
      </section>
      <section id="testimonials" className="bg-white py-6 px-6 md:px-12">
        {/* judul */}
        <div >
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-5">  Testimoni Klien </h3>
        </div>

        <div className="flex flex-col items-center grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {/* box1 */}
                <div className="flex items-center flex-col bg-white  p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                      <Image     
                                      loading="lazy"
                                      src="/testi.png"
                                      alt="testi"
                                      width={150}
                                      height={250}
                                      className="rounded-full"
                                      />
                  <h3 className="sm:text-2xl text-3xl font-bold"> Joseph </h3>
                  <p className="text-gray-500 mb-5">CEO LariPagiClub</p>
                  <p>Benar benar perusahaan yang professional! Saya dibantu benar-benar dengan mudah membuat semuanya dari 0! Hasil juga sangat memuaskan.</p>
                </div>
                 {/* box2 */}
                 <div className="flex flex-col items-center bg-white  p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                      <Image     
                                      loading="lazy"
                                      src="/gerrard.webp"
                                      alt="testi"
                                      width={250}
                                      height={150}
                                      className="rounded-full"
                                      />
                  <h3 className="sm:text-2xl text-3xl font-bold"> Steven Gerrard </h3>
                  <p className="text-gray-500 mb-5">CEO Liverpool FC Youth</p>
                  <p>Saya mengeluarkan semua keinginan saya kepada perusahaan ini dan dijadikan kenyataan oleh mereka!</p>
                </div>
                 {/* box3 */}
                 <div className="flex flex-col items-center bg-white  p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                      <Image     
                                      loading="lazy"
                                      src="/simic.jpeg"
                                      alt="testi"
                                      width={250}
                                      height={250}
                                      className="rounded-full"
                                      />
                  <h3 className="sm:text-2xl text-3xl font-bold"> Marko Simic </h3>
                  <p className="text-gray-500 mb-5">CEO Persija Scouting Center</p>
                  <p>Saya menyerahkan semua kepada perusahaan ini. Dan saya terbantu karena konsultasi dari awal serta selalu diberikan update mengenai progress hingga hasil akhir</p>
                </div>
        </div>
      </section>
      <section id="teams">
        <div>
          <div className="py-25">
              <section className="bg-gray-100 py-16 px-6 md:px-12 ">
              <div className="text-center mb-10">
                {/* judul */}
                <h4 className="text-4xl md:text-5xl font-bold mb-4">Teams!</h4>
                <p className="text-lg mb-5 font-mono">Team works make the dream works</p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              {/* box1 */}
                <div className="flex items-center flex-col bg-white  p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ">
                  <Image  loading="lazy"
                          src="/1.jpg"
                          alt="1"
                          width={150}
                          height={250}
                          className="rounded-full flex" />
                  <p className="text-4xl font-bold">Joel Henderson</p>
                  <p className="text-gray-500">Head Of Design</p>
                  <p>joel.henderson@example.com</p>
                  <p>(310) 749-9305</p>
                </div>
              {/* box2 */}
                <div className="flex items-center flex-col bg-white  p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ">
                  <Image  loading="lazy"
                          src="/2.jpg"
                          alt="2"
                          width={150}
                          height={250}
                          className="rounded-full flex" />
                  <p className="text-4xl font-bold">Willard Fox</p>
                  <p className="text-gray-500">Head Of Marketing</p>
                  <p>willard@example.com</p>
                  <p>(310) 744-2305</p>
                </div>
              {/* box3 */}
                <div className="flex items-center flex-col bg-white  p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ">
                  <Image  loading="lazy"
                          src="/3.jpg"
                          alt="3"
                          width={150}
                          height={250}
                          className="rounded-full flex" />
                  <p className="text-4xl font-bold">Harry Keson</p>
                  <p className="text-gray-500">Head Of IT</p>
                  <p>harrykeson@example.com</p>
                  <p>(310) 729-9436</p>
                </div>
                </div>
              </div>
              </section>
            </div>
        </div>
      </section>
      <section id="contact" className="bg-white  py-6 md:px-12">
         {/* judul */}
         <div className="flex flex-col items-center">
        <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-5">  Contact Us! </p>
        <p>Jl. Karawaci Residence</p>
        <p>Kabupaten Tangerang</p>
        <p>brandonisades08@gmail.com</p>
        <p>085607264055</p>
        </div>
      </section>

       {/* Footer */}
       <footer className="bg-black flex flex-col sm:flex-row justify-between items-center px-4 py-3 text-white text-sm">
        <div>2025 Tjakra Tech. All rights reserved</div>
        <p>Designed by Brandon</p>
      </footer>

    </div>
  );
}
