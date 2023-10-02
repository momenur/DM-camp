
const SectionTitle = ({subtitle, title}) => {
    return (
        <div className="pt-24 mb-12">
            <div className="w-4/12 mx-auto text-center">
                <h1 className=" text-3xl text-[#ff0800] uppercase font-semibold">---{title}---</h1>
                <h4 className="pb-1 text-xl text-yellow-400 border-[#f26661] border-b-2">{subtitle}</h4>
            </div>
        </div>
    );
};

export default SectionTitle;