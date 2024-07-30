const RoleSelection = () => {
    return (
        <div className="flex items-center justify-center flex-grow">
            <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-3xl max-w-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Select Account Type</h1>
                <div className="flex gap-6">
                    <button className="flex flex-col items-center border-2 border-gray-300 bg-white rounded-3xl px-8 py-6 text-xl font-bold transition-transform hover:border-gray-500">
                        <img src="/mentor.png" alt="Mentor Icon" className="mb-3 w-16 h-16" />
                        Mentor
                    </button>
                    <button className="flex flex-col items-center border-2 border-gray-300 bg-white rounded-3xl px-8 py-6 text-xl font-bold transition-transform hover:border-gray-500">
                        <img src="/student.png" alt="Student Icon" className="mb-3 w-16 h-16" />
                        Student
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RoleSelection;
