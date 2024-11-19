import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <div className="bg-white text-center text-black-primary">
        <p className="mt-10 text-sm sm:text:md md:text-lg md:mt-5 leading-6">Sorry, the requested Page does not exist.</p>
        <p className="mt-10 text-sm">
          <Link href="/">← back to home</Link>
        </p>
      </div>
    </>
  )
}