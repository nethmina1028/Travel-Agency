import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import TopSelling from "./components/TopSelling";
import BookNextTrip from "./components/BookNextTrip";


export default function Home() {
  return (
    <main className="relative poppins  md:px-[9rem]">
    <Navbar />

    <div className="px-2 flex flex-col gap-[7.69rem]">
    <Hero />

    <div className="absolute top-0 right-0 -z-10">
          <img src="/images/blob-shape.png" alt="blob background shape" />
     </div>

     <div className="absolute top-0 left-0 -z-10">
          <img src="/images/top-left-gradient.png" alt="blob background shape" />
     </div>

    <div className="relative">
     <Category />
        <div className="absolute top-0 right-0 -z-10">
          <img src="/images/plus-group.png" alt="blob background shape" />
        </div>
    </div>

     <TopSelling />

     <BookNextTrip />

     
     </div>
    </main>
  );
}
