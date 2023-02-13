import React, { PropsWithChildren } from "react";
import ProgramTaskBar from "./ProgramTaskBar";

type ComponentType = {
    id: string;
    icon: string;
    name: string;
    minimized: boolean;
};

interface ComponentProps {
    component: {
        programs: ComponentType[];
        setPrograms: React.Dispatch<React.SetStateAction<ComponentType[]>>;
    };
}

function ProgramsTaskBarFactory({ component }: PropsWithChildren<ComponentProps>) {
    const getPrograms = () => {
        const map = component.programs.map((program) => {
            return (
                <div>
                    <ProgramTaskBar component={{
                        program: program,
                        setPrograms: component.setPrograms
                    }} />
                </div>
            );
        });
        return <>{map}</>
    }

    return (
        <>
            {getPrograms()}
        </>
    );
}

export default ProgramsTaskBarFactory;