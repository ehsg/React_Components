import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go"
import Panel from "./Panel"

function DropDown( { options, value, onChange } ) {
    const [isOpen, setIsOpen] = useState(false);
    const divElement = useRef();

    const handleClick = () => {
        setIsOpen((currentisOpen) => !currentisOpen);
    };

    useEffect(() => {
        const handler = (event) => {
            //divElement pode ser null, entao verificar antes de seguir
            if (!divElement.current) {
                return;
            }
            
            if (!divElement.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handler, true);
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option);
    };

    const renderedOptions = options.map( (option) => {
        return <div className="hover:bg-blue-300 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    });

    return (<div ref={divElement} className="w-48 relative">
        <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
              {value?.label || 'Select...'}
              <GoChevronDown className="text-lg"/>  
        </Panel>
        {isOpen && <Panel className="absolute top-full"> {renderedOptions} </Panel>}
        </div>);
}

export default DropDown;