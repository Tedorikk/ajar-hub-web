import VisitorNavBar from "@/components/navigations/navbar-visitors";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <VisitorNavBar />
      <div className="flex flex-col px-8 md:px-52 items-center justify-center">
        <div className="text-5xl md:text-9xl sm:text-5xl font-bold pt-24">
          Inovasi, Digitalisasi, Edukasi
        </div>
      </div>
    </div>
  );
}
