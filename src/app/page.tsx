import Image from "next/image";

export default function Home() {
  return (
      <div className="flex justify-around items-center h-[100vh]">
      <div>
        <h1 className="font-extrabold text-5xl my-3">Hello! My name is <span className="text-red-500">Faiza</span></h1>
        <p className="font-extrabold text-4xl">I am a nextjs developer</p>
      </div>
      <div>
        <div>
          <Image className="rounded-lg" src="/download.jfif" alt="profile-photo" width={200} height={200}></Image>
        </div>
      </div>
    </div>
  );
}
