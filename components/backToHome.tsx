import Link from "next/link";

export default function BackToHome() {
  return (
    <div className="container md:-ml-2">
      <Link href="/">
        <a className="text-black">← Back to home</a>
      </Link>
    </div>
  );
}
