import { NextRequest, NextResponse } from 'next/server';
import Course from '@/app/models/Course';
import dbConnect from '../../lib/dbConnect';

export async function GET (req: NextRequest, res: NextResponse) {

    await dbConnect();

    try {
        const courses = await Course.find({});
        console.log(courses);
        NextResponse.json({ success: true, data: courses });
      } catch (error) {
        NextResponse.json({ success: false });
      }
      NextResponse.json({ success: false });

}