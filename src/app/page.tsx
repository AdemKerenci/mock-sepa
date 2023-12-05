import Link from "next/link";

export default function Home() {
  return (
    <div className="w-1/4 mx-auto">
      <Link href={"/sepa"}>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          CLICK HERE GO TO SEPA TRANSFER PAGE
        </button>
      </Link>
    </div>
  );
}
