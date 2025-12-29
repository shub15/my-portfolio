import { useRouteError, Link } from "react-router";
import { motion } from "framer-motion";

export default function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 selection:bg-white selection:text-black">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl w-full text-center space-y-8"
            >
                {/* Error Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-neutral-800 mb-8"
                >
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-neutral-500"
                    >
                        <path d="M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>

                {/* Error Message */}
                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none"
                    >
                        Oops!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-neutral-400 font-light"
                    >
                        Something went wrong
                    </motion.p>

                    {/* Error Details */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg text-left"
                        >
                            <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                                Error Details
                            </p>
                            <p className="text-sm text-neutral-400 font-mono break-all">
                                {error.statusText || error.message || "Unknown error occurred"}
                            </p>
                        </motion.div>
                    )}
                </div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                >
                    <button
                        onClick={() => window.location.reload()}
                        className="group inline-flex items-center gap-3 border border-neutral-700 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="group-hover:rotate-180 transition-transform duration-500"
                        >
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 3v5h-5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 21v-5h5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Reload Page
                    </button>

                    <Link
                        to="/"
                        className="group inline-flex items-center gap-3 px-8 py-4 text-neutral-400 hover:text-white transition-colors font-medium"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="group-hover:-translate-x-1 transition-transform"
                        >
                            <path d="M19 12H5M5 12l7 7M5 12l7-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Home
                    </Link>
                </motion.div>

                {/* Footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-xs text-neutral-400 font-mono pt-12"
                >
                    If this issue persists, please refresh the page or contact support
                </motion.p>
            </motion.div>
        </div>
    );
}
