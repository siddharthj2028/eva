import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {dummyInterviews} from "@/constants"
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
    return (
        <>
            <section className="card-cta">
                <div className="flex flex-col gap-4 max-w-lg">
                    <h2>Get Interview Ready with AI powered Practice & Feedback </h2>
                    <p>
                        Practice job interview with AI with real interview questions and get instant feedback
                    </p>
                    <Button asChild className="btn-primary max-sm:w-full">
                        <Link href="/interview">Start Practice</Link>
                    </Button>
                </div>
                <Image src="/robot.png" alt="robo-dude" width={300} height={300} className=" max-sm:hidden" />
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interviews</h2>

                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id}/>
                    ))}

                    {/*<p>You haven&apos;t taken any interviews yet</p>*/}
                </div>
            </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Take an Interview</h2>

                <div className="interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))}
                </div>
            </section>


        </>
    )
}
export default Page
