import { useState } from "react";

export default function CA({ label = "CA:", value }){
    const [ copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);

    const caValue = "8Vb11fvr9f7k74hrhNJEqjGq1hzgBH7FnuwGFbPppump";

    const handlecopy = ()=>{
        navigator.clipboard.writeText(caValue);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        },2000);
    }

    return(
        <p>
            {label}{""}
            <span
            onClick={handlecopy}
            onMouseEnter={()=> setHovered(true)}
            onMouseLeave={()=> setHovered(false)}
            style={{
                cursor:'pointer',
                color: copied? '#01b58e': '#000000e6',
                textDecoration: hovered? 'underline' :'none',
                opacity: hovered? 0.8: 1,
                fontSize: hovered? '1.1em': '1em',
                transition:'opacity: 0.2s'
            }}

            >
            {value}
            </span>
            {copied && (
                <span style={{marginLeft:'10px', color:'#01b58e'}}>copied!</span>
            )}
        </p>
    )
}

