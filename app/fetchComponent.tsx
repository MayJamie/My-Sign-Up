'use client';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CourseList() {
  const { data, error } = useSWR('/pages/api/courses', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {data.data.map((course: any) => (
          <li key={course._id}>
            {course.courseCode} - {course.title} by {course.teacher}
          </li>
        ))}
      </ul>
    </div>
  );
}
