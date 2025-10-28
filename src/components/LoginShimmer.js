import React from "react";

const LoginShimmer = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 animate-pulse">
            {/* Background shimmer container */}
            <div className="w-full max-w-md mx-auto relative z-10">
                {/* Header shimmer */}
                <div className="text-center mb-10">
                    <div className="h-6 w-40 bg-white/10 rounded-md mx-auto mb-3"></div>
                    <div className="h-4 w-60 bg-white/10 rounded-md mx-auto"></div>
                </div>

                {/* Card shimmer */}
                <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl px-8 py-12 shadow-2xl border border-white/10 min-h-[26rem]">
                    {/* Name shimmer */}
                    <div className="w-full h-10 bg-white/10 rounded-xl mb-6"></div>

                    {/* Age shimmer */}
                    <div className="w-full h-10 bg-white/10 rounded-xl mb-6"></div>

                    {/* Email shimmer */}
                    <div className="w-full h-10 bg-white/10 rounded-xl mb-6"></div>

                    {/* Password shimmer */}
                    <div className="w-full h-10 bg-white/10 rounded-xl mb-8"></div>

                    {/* Button shimmer */}
                    <div className="w-full h-12 bg-gradient-to-r from-red-500/40 to-red-700/40 rounded-xl mb-10"></div>

                    {/* Divider shimmer */}
                    <div className="flex items-center justify-center gap-3 my-8">
                        <div className="w-24 h-[1px] bg-white/10"></div>
                        <div className="w-8 h-4 bg-white/10 rounded-md"></div>
                        <div className="w-24 h-[1px] bg-white/10"></div>
                    </div>

                    {/* Bottom text shimmer */}
                    <div className="flex justify-center gap-2">
                        <div className="w-32 h-4 bg-white/10 rounded-md"></div>
                        <div className="w-16 h-4 bg-red-500/20 rounded-md"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginShimmer;
