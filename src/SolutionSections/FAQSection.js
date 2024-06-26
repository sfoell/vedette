import React from 'react';
import Question from "../Components/Question";
import data from "../Components/Data";
import { useState } from "react";

// Code from https://github.com/ajaymuktha/React-Accordion/tree/main

export default function FAQs() {

    const [questions, setQuestions] = useState(data);

    return (
        <section className='faqs'>
            <h2>Frequently Asked Questions</h2>
            {questions.map((item) => {
                return <Question key={item.id} {...item} />;
            })}
        </section>
    )
}