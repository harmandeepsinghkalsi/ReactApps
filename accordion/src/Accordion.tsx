import React from "react";
import { qa } from './QA';

export const Accordion: React.FC = () => {

    return (
        <div>
        {
            qa.map((e,i) => {
                return (
                <div key={i}>
                    <List question={e.question} answer={e.answer} />
                </div>
                )
            })
        }
        </div>
    );
}

export const List = (props: { question: any, answer: any}) => {

    console.log(props);
    return (
<ul>
    <li>
        {props.question}
    </li>
    <li>
        {props.answer}
    </li>
</ul>

    )
}