import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return(
    <div className="flex items-center justify-center container mx-auto py-16">
      <SignIn />
    </div>
  );
}