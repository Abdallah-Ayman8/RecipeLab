export default function NotFound() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <div className="px-15 py-3 rounded-3xl flex flex-col justify-center items-center border border-orange-600 shadow-2xl">
          <h1 className="text-5xl">404</h1>
          <p className="mt-2 text-gray-600">Page not found</p>
        </div>
      </div>
    </main>
  );
}
