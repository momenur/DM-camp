
const SectionTitle = ({subtitle, title}) => {
    return (
        <div className="pt-24 mb-12">
            <div className="w-4/12 mx-auto text-center border-b-4">
                <h4 className="pb-1 mt-2 text-xl text-orange-700 border-b-2">{subtitle}</h4>
                <h1 className="py-3 text-3xl text-orange-600 uppercase">{title}</h1>
            </div>
        </div>
    );
};

export default SectionTitle;