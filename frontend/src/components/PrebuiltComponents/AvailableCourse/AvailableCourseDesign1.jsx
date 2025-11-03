import React from 'react';

const AvailableCourseDesign1 = () => {
    const courses = [
        { id: 1, title: 'Complete Web Development', enrolled: 2500, rating: 4.8, lessons: 120 },
        { id: 2, title: 'Digital Marketing Mastery', enrolled: 1800, rating: 4.9, lessons: 85 },
        { id: 3, title: 'Graphic Design Pro', enrolled: 1200, rating: 4.7, lessons: 65 },
        { id: 4, title: 'Business Analytics', enrolled: 950, rating: 4.6, lessons: 45 },
        { id: 5, title: 'Photography Basics', enrolled: 780, rating: 4.8, lessons: 30 },
        { id: 6, title: 'Content Writing', enrolled: 650, rating: 4.5, lessons: 40 },
    ];

    return (
        <div className="bg-white p-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 mb-3">All Available Courses</h2>
                <p className="text-gray-600 mb-10">Browse through our complete catalog</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div key={course.id} className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition">
                            <div className="w-full h-40 bg-linear-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-5xl mb-4">
                                📚
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h3>
                            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                <span>⭐ {course.rating}</span>
                                <span>👥 {course.enrolled.toLocaleString()}</span>
                                <span>📖 {course.lessons} lessons</span>
                            </div>
                            <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                                View Course
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition">
                        Load More Courses
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AvailableCourseDesign1;