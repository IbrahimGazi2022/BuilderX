import React from 'react';

const NewCourseDesign1 = () => {
    const newCourses = [
        { id: 1, title: 'React 2025 Complete Guide', price: 49.99, students: '1.2K', badge: 'NEW' },
        { id: 2, title: 'AI & Machine Learning', price: 59.99, students: '890', badge: 'HOT' },
        { id: 3, title: 'Web3 Development', price: 69.99, students: '650', badge: 'NEW' },
    ];

    return (
        <div className="bg-linear-to-br from-blue-50 to-purple-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                        ✨ Just Launched
                    </span>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">New Courses This Week</h2>
                    <p className="text-gray-600 text-lg">Start learning today with our latest additions</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {newCourses.map((course) => (
                        <div key={course.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden group">
                            <div className="relative">
                                <div className="h-48 bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-6xl">
                                    🎓
                                </div>
                                <span className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                                    {course.badge}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                                    {course.title}
                                </h3>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                                    <span className="text-sm text-gray-600">👥 {course.students} students</span>
                                </div>
                                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewCourseDesign1;