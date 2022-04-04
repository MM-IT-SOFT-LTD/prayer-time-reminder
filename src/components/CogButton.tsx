import Cog from "./icons/Cog";


export default function CogButton({ onClick }: { onClick : () => void }) {
    return (
        <div className="absolute flex top-4 right-4" onClick={onClick}>
            <div className="w-64">
                <div className="w-full flex flex-end">
                    <Cog className="h-12 w-12 opacity-10 hover:opacity-100 cursor-pointer transition duration-300 text-gray-500 ml-auto" />
                </div>
            </div>
        </div>
    )
}