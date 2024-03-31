import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="text-center gap-4 text-xl text-white pt-[100px]">we have More Than +250 pokemon </div>
      <div className="text-2xl font-bold text-slate-200 text-center p-5"> find out yourself</div>
      <Link href="/pokemon"><div className="text-center hover:underline text-gray-400">Click Here</div></Link>
    </main>
  );
}
