import Image from "next/image";
import Link from "next/link";
import img from "../assets/Frame 3.png";

export default function Home() {
  return (
    <div className="container mx-auto py-[6rem]">
      <div>
        <div className="w-[50rem] mx-auto text-center">
          <h1 className="text-4xl font-semibold text-gray-800">NextAuth, your trusted companion in authentication solutions!</h1>
          <p className="text-sm mt-4 text-gray-600">Welcome to NextAuth, your trusted companion in authentication solutions! Whether you are building a robust user authentication system for your web or mobile applications, or looking to enhance security and user experience, NextAuth has got you covered. </p>
          <div className='flex gap-4 text-gray-800 justify-center my-6'>
              <Link href='/sign-up' className='bg-sky-600 text-white px-4 py-2 text-sm font-semibold rounded-md'>Get Started</Link>
              <Link href='/sign-in' className='border border-gray-300 px-4 py-2 text-sm font-semibold rounded-md'>Sign in</Link>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Image 
            className="rounded-xl"
            src={img} 
            alt="img"
            width={1000}
            height={900}
          />
        </div>
      </div>
    </div>
  );
}
