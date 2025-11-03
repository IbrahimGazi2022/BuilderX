import React from 'react';

const AvailableCourseDesign2 = () => {
    const courses = [
        {
            id: 1,
            title: 'Frontend Development',
            description: 'Master HTML, CSS, JavaScript and React',
            price: 59.99,
            duration: '40 hours',
            level: 'Intermediate'
        },
        {
            id: 2,
            title: 'Backend with Node.js',
            description: 'Build scalable APIs and servers',
            price: 64.99,
            duration: '35 hours',
            level: 'Advanced'
        },
        {
            id: 3,
            title: 'UI/UX Design',
            description: 'Create beautiful user experiences',
            price: 49.99,
            duration: '25 hours',
            level: 'Beginner'
        },
    ];

    return (
        <div className="bg-linear-to-br from-gray-50 to-blue-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">Course Catalog</h2>
                        <p className="text-gray-600">{courses.length} courses available for you</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>All Levels</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-6">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-72 h-56 md:h-auto bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-6xl">
                                    💻
                                </div>
                                <div className="flex-1 p-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                                                {course.level}
                                            </span>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h3>
                                            <p className="text-gray-600">{course.description}</p>
                                        </div>
                                        <span className="text-3xl font-bold text-blue-600">${course.price}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                                            <span>📅 {course.duration}</span>
                                            <span>⭐ 4.8</span>
                                            <span>👥 1.2K students</span>
                                        </div>
                                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                                            Enroll Now →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AvailableCourseDesign2;