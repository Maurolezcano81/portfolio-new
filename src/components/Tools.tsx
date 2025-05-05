"use client";

import { InfiniteMovingCards } from "./ui/MovingCards";


export function Tools() {
    return (
        <div className="">
            <InfiniteMovingCards
                items={frontend}
                direction="right"
                speed="fast"
            />
        </div>
    );
}

const frontend = [
    {
        src: "/html.svg",
        name: "HTML5"
    },
    {
        src: "/css.svg",
        name: "CSS3"
    },
    {
        src: "/js.svg",
        name: "Js"
    },
    {
        src: "/ts.svg",
        name: "Ts"
    },
    {
        src: "/re.svg",
        name: "React"
    },
    {
        src: "/tail.svg",
        name: "React"
    },
    {
        src: "/form.svg",
        name: "React Hook Forms"
    },
    {
        src: "/zustand.svg",
        name: "Zustand"
    },
    {
        src: "/android.svg",
        name: "Android"
    },
    {
        src: "/mdt.svg",
        name: "Material Design 3"
    },
    {
        src: "/nest.svg",
        name: "Nest"
    },
    {
        src: "/express.svg",
        name: "Express"
    },
    {
        src: "/sql.svg",
        name: "Sql"
    },

];
