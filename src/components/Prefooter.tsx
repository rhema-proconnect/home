import Link from "next/link";

export default function Prefooter() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 pb-10">
        <h1 className="text-4xl font-bold text-center">
          .....................
        </h1>
      </div>

      <div className="text-center pb-20">
        <Link href="https://github.com/humberni/halley" target="_blank">
          <button className="bg-rose-500 text-white rounded-full px-6 p-3 font-medium">
            ...................
          </button>
        </Link>
      </div>
    </div>
  );
}
