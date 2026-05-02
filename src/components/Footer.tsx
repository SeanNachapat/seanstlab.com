export default function Footer() {
  return (
    <footer className="w-full text-center p-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[10px] md:text-xs text-muted font-mono uppercase tracking-widest opacity-80">
          &copy; {new Date().getFullYear()} NACHAPAT IAMPHUANG
        </p>
      </div>
    </footer>
  );
}
