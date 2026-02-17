import { setRequestLocale } from 'next-intl/server';
import { LoginForm } from "@/components/auth/login-form";
import Image from "next/image";

export default async function LoginPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen w-full flex">
       {/* Left Side - Immersive Visual */}
       <div className="hidden lg:flex w-1/2 relative bg-black items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <Image 
               src="https://images.unsplash.com/photo-1614728853913-1e32005e307e?q=80&w=2070&auto=format&fit=crop"
               alt="Login Visual"
               fill
               className="object-cover opacity-60"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </div>
          
          <div className="relative z-10 p-12 max-w-xl">
             <div className="inline-block px-3 py-1 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium">
                Welcome Back
             </div>
             <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Continue your learning journey with Omuz.tj
             </h1>
             <p className="text-lg text-slate-300 leading-relaxed">
                Access your personalized dashboard, track your progress, and connect with your mentors.
             </p>
          </div>

          {/* Animated decorative elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
       </div>

       {/* Right Side - Form */}
       <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background relative overflow-hidden">
          {/* Mobile Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full lg:hidden z-0">
             <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5" />
             <div className="absolute top-0 left-1/2 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="w-full max-w-[400px] relative z-10">
             <div className="mb-8 text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-2">Sign In</h2>
                <p className="text-muted-foreground">Enter your credentials to access your account</p>
             </div>
             <LoginForm />
          </div>
       </div>
    </div>
  );
}
