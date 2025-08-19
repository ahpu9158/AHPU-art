import Image from "next/image";

export default function QueueSection() {
    return (
        <div >
            <div className="flex flex-col items-center justify-center">
                <p className="text-lg text-gray-700 mb-2">
                    All queues are recorded at&nbsp;
                    <a
                        href="https://trello.com/b/ZAZWQLny/ahpu-commission-status"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 underline font-semibold hover:text-purple-800 transition"
                    >
                        Trello board
                    </a>
                    .
                </p>
                <p className="text-md text-gray-600 mb-4">
                    Your queue will be recorded as <br /> <span className="font-mono bg-purple-100 px-2 py-1 rounded">[Commission Type] - [Your Commission ID] [Your Name]</span>
                </p>
                <Image
                    src="/img/queue.png"
                    alt="Queue Image"
                    width={400}
                    height={400}
                    className="w-64 h-auto object-cover rounded-2xl"
                />
            </div>
        </div>
    );
}