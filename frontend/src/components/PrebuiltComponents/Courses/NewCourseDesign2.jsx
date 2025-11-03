import React from 'react';

const NewCourseDesign2 = () => {
    const courses = [
        { id: 1, title: 'Advanced TypeScript', instructor: 'John Doe', duration: '12 hours', price: 'Free' },
        { id: 2, title: 'Docker & Kubernetes', instructor: 'Jane Smith', duration: '8 hours', price: '$39' },
    ];

    return (
        <div className="bg-white p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">🆕 Fresh Content</h2>
                        <p className="text-gray-600">Our newest courses added this month</p>
                    </div>
                    <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition">
                        View All →
                    </button>
                </div>

                <div className="space-y-6">
                    {courses.map((course) => (
                        <div key={course.id} className="flex items-center bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition group">
                            <div className="w-32 h-32 bg-linear-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-5xl mr-6">
                                📖
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                                        NEW
                                    </span>
                                    <span className="text-sm text-gray-600">Added 2 days ago</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                                    {course.title}
                                </h3>
                                <p className="text-gray-600 mb-3">By {course.instructor} • {course.duration}</p>
                                <div className="flex items-center space-x-4">
                                    <span className="text-2xl font-bold text-gray-800">{course.price}</span>
                                    <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                                        Start Learning
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

export default NewCourseDesign2;