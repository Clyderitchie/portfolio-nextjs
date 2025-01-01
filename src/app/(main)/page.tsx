import NavMenu from "@/components/NavMenu";

export default async function HomePage() {
  return (
    <>
      <main className="flex h-full w-full min-w-0 gap-5">
        <div className="w-full min-w-0 space-y-5">
          <h1 className="text-center text-3xl">Hello World!</h1>
        </div>
        {/* <div className="fixed bottom-0 right-0 mx-5 max-h-fit min-h-full min-w-0 max-w-fit">
          <NavMenu />
        </div> */}
      </main>
    </>
  );
}
