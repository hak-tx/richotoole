export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Rich O&apos;Toole. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
