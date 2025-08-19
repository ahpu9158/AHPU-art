'use client'
import { useEffect, useState } from "react";
import { MdWeb } from "react-icons/md";

export default function GalleryDrive() {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const imageNames = [
            "R-1.png", "R-2.png", "R-3.png", "R-4.png",
            "RC-1.png", "RC-2.png", "RC-3.png", "RC-4.png"
        ];
        const images = imageNames.map(name => `/img/CommissionExamples/${name}`);
        setImages(images);
    }, []);

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-center text-4xl mb-8 text-[#3b2f2f]">
                Portfolio
            </h1>

            {/* Illustration & Sketch Section */}
            <div className="mb-6 flex justify-center">
                <span className="bg-[#f5e9d7] text-[#7c5e3c] px-6 py-2 rounded-full text-lg font-semibold shadow">
                    Illustration & Sketch
                </span>
            </div>
            <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
                {images.map((src, idx) => (
                    <div key={idx} className="relative group break-inside-avoid">
                        <div className="bg-[#e9e4dc] p-2 border border-[#d6c8b0] shadow-md rounded">
                            <img
                                src={src}
                                className="w-full h-auto object-cover rounded shadow-lg 
                                    transition-transform duration-300 group-hover:scale-105"
                                alt={`Portfolio ${idx + 1}`}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Comic Section */}
            <div className="mt-12 flex flex-col items-center">
                <span className="bg-[#f5e9d7] text-[#7c5e3c] px-6 py-2 rounded-full text-lg font-semibold shadow mb-6">
                    Comic
                </span>
                <img
                    src={"/img/CommissionExamples/COMIC-1.png"}
                    className="w-full max-w-2xl h-auto object-cover rounded shadow-lg 
                        transition-transform duration-300 group-hover:scale-105 mb-6"
                    alt="Comic Example"
                />
                <a
                    href="https://cara.app/ahpu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 justify-center rounded-lg border-2 border-gray-300 py-4 px-6 text-black font-medium transition-all duration-300 hover:scale-[1.02] hover:text-purple-500 hover:border-purple-500"
                >
                    <MdWeb className="text-xl" />
                    <span className="text-base">Read sunflos on Webtoon Canvas</span>
                </a>
            </div>
        </div>
    );
}
