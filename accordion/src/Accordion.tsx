import React from "react";
import {qa} from './QA';
import { EACCES } from "constants";

export const Accordion: React.FC = () => {

    return (
        <div>
        {
            qa.map(function (e,i){
                return <List question={e.question} answer={e.answer} key={i} />;
            })
        }
        </div>
    );
}

export const List = (props: { question: any, answer: any, key: any }) => {

    console.log(props);
    return (
<ul key={props.key}>
    <li>
        {props.question}
    </li>
    <li>
        {props.answer}
    </li>
</ul>

    )
}