import React from 'react';

// null components for pretty JSX
export const FAQ = ({children}) => { return (<div>{ children }</div>) };
export const Question = ({children}) => { return (<div>{ children }</div>) };
export const Answer = ({children}) => { return (<div>{ children }</div>) };

// this is where the magic happens
export const FAQs = ({children}) => {
    function processQA(qas) {        
        if (qas.props.mdxType == 'Question') {
            mainentity[qas_length] = {
                "@type": "Question"
            }
            if (qas.props.children) {
                mainentity[qas_length]['name'] = qas.props.children
            }
        }
        if (qas.props.mdxType == 'Answer') {
            mainentity[qas_length]['acceptedAnswer'] = {}
            if (qas.props.children) {
                mainentity[qas_length]['acceptedAnswer']["@type"] = "Answer"
                mainentity[qas_length]['acceptedAnswer']["text"] = qas.props.children
            }
            qas_length++
        }
    }
    let mainentity = [];
    let qas_length = 0;
    if (children.props && children.props.children.length > 0) {
        children.props.children.forEach(qas => {
            processQA(qas)
        });
    } else if (children.length > 1) {
        children.forEach(qa => {
            qa.props.children.forEach(qas => {
                processQA(qas)
            });            
        });        
    }
    return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:`
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity":` + JSON.stringify(mainentity, null, 2) + `
    }
    `}}></script>
    )
};