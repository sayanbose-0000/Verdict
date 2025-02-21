import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex flex-col justify-center items-center absolute inset-0">
        <h1 className="text-4xl font-bold">404!</h1>
        <p>Page Not Found</p>
        <Link href="/" className="underline_text text-sm my-5 hover:scale-110 duration-500 transition-all">(Return to Home)</Link>
    </main>

  );
};

export default NotFoundPage;