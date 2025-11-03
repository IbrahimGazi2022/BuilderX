import React from 'react';

const NewCourseDesign3 = () => {
    const courses = [
        { id: 1, title: 'Cybersecurity Basics', category: 'Security', level: 'Beginner', price: 44.99 },
        { id: 2, title: 'Cloud Computing AWS', category: 'Cloud', level: 'Intermediate', price: 54.99 },
        { id: 3, title: 'Mobile App Design', category: 'Design', level: 'Advanced', price: 64.99 },
        { id: 4, title: 'Data Science Python', category: 'Data', level: 'Beginner', price: 49.99 },
    ];

    const levelColors = {
        'Beginner': 'bg-green-100 text-green-700',
        'Intermediate': 'bg-yellow-100 text-yellow-700',
        'Advanced': 'bg-red-100 text-red-700'
    };

    return (
        <div className="bg-gray-900 text-white p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-4">
                        <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Latest Releases
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">Explore our newest learning experiences</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition">
                            <div className="h-40 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-5xl relative">
                                🚀
                                <div className="absolute top-3 left-3 px-3 py-1 bg-black bg-opacity-50 backdrop-blur-sm rounded-full text-xs font-bold">
                                    NEW
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center space-x-2 mb-3">
                                    <span className="text-xs text-gray-400">{course.category}</span>
                                    <span className="text-xs text-gray-600">•</span>
                                    <span className={`text-xs px-2 py-1 rounded ${levelColors[course.level]}`}>
                                        {course.level}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold mb-3 h-14">{course.title}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-blue-400">${course.price}</span>
                                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition">
                                        Enroll
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewCourseDesign3;