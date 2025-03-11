import submitQuestion from "@/lib/submitQuestion";
import { notFound } from "next/navigation";
import { auth } from "~/auth";

export const generateMetadata = async () => {
  return {
    title: `Verdict- Create`,
    description: 'Create Question for Verdict'
  };
};


const CreateQuestionPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const session = await auth();
  const { slug } = await params;
  const emailFromSlug = decodeURIComponent(slug);

  if (emailFromSlug !== session?.user?.email) return notFound();

  return (
    <main className="absolute inset-0 top-12 flex justify-center items-center">

      <form className="flex flex-col gap-4 justify-center items-center w-full m-2 p-2" action={submitQuestion}>
        <div className="flex flex-col gap-1 w-full mb:w-auto">
          <label className="ml-1" htmlFor="question">Enter a Question: </label>
          <textarea name="question" id="question" className="px-3 py-2 text-black bg-gray-300 rounded-md w-full mb:w-72 resize-none h-full" rows={10} autoFocus />
        </div>

        <button type="submit" className="bg-green-700 px-3 py-2 rounded-full mt-4 hover:scale-110 duration-150">Ask It</button>
      </form>

    </main>
  );
};

export default CreateQuestionPage;