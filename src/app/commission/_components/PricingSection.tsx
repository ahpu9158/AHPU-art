import Image from "next/image";

export default function PricingSection() {
    const imageClass = "w-full h-auto object-cover rounded-lg shadow-lg";

    return (
        <div className="">
            <div className="flex text-center flex-col items-center gap-y-4">
                <h2 className="mb-4 text-3xl font-medium">Rough</h2>
                <Image
                    src="/img/commissionTypes/roughTH.png"
                    alt="Rough Pricing"
                    width={500}
                    height={500}
                    className={imageClass}
                />
                <h2 className="mb-4 text-3xl font-medium">Line</h2>
                <Image
                    src="/img/commissionTypes/LineTH.png"
                    alt="Line Pricing"
                    width={500}
                    height={500}
                    className={imageClass}
                />
                <h2 className="mb-4 text-3xl font-medium">Comic</h2>
                <Image
                    src="/img/commissionTypes/comicTH.png"
                    alt="Comic Pricing"
                    width={500}
                    height={500}
                    className={imageClass}
                />
                <p>Note: more others specific commission types can be personally requested </p>
            </div>
        </div>
    );
}