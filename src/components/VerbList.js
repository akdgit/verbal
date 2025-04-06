import React, { useState, useEffect } from "react";
import "./styles/VerbList.css";

function VerbList() {
    const [verb, setVerb] = useState([]);
    const [visibleVerbs, setVisibleVers ] = useState(15);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        fetch("/verbs.json")
            .then(response => response.json())
            .then(data => setVerb(data))
            .catch(error => console.error("Error to show verbs list", error))

    }, []);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === "") {
            toggleExpand();
        }
    };

    const loadMore = () => {
        if (visibleVerbs < verb.length) {
            setVisibleVers(prev => prev + 15);
        }
    };

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            loadMore();
        }
    };

    return(
        <div className="list">
            <span
                className="toggle-button"
                onClick={toggleExpand}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                aria-label={isExpanded ? "Ocultar lista de verbos" : "Mostrar lista de verbos"}
            >
                {isExpanded ? "Ocultar lista" : "Mostrar lista"}
            </span>

            { isExpanded && (
                <div className="verb-list-container" onScroll={handleScroll} tabIndex={0}> 
                    <div aria-live="polite" className="sr-only" >
                        {visibleVerbs} verbos cargados
                    </div>
                    <table className="verb-table" role="table">
                        <thead>
                            <tr>
                                <th scope="col">Infinitivo</th>
                                <th scope="col">Tercera Persona</th>
                                <th scope="col">Pasado Simple</th>
                                <th scope="col">Pasado Participio</th>
                                <th scope="col">Gerundio</th>
                                <th scope="col">Traducción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {verb.slice(0, visibleVerbs).map((verb, index) => (
                                <tr key={index} tabIndex={0}>
                                    <td>{verb.simple_form}</td>
                                    <td>{verb.third_person}</td>
                                    <td>{verb.simple_past}</td>
                                    <td>{verb.past_participle}</td>
                                    <td>{verb.gerund}</td>
                                    <td>{verb.meaning}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button
                        className="floating-back-to-top"
                        onClick={() => {
                            const container = document.querySelector('.verb-list-container');
                                if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        aria-label="Volver al principio de la lista"
                    >
                        ↑
                    </button>
                    {/*<button
                        className="back-to-top"
                        onClick={() => {
                        const container = document.querySelector('.verb-list-container');
                        if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        Volver arriba
                    </button>*/}
                </div>
            ) }
        </div>
    );
}

export default VerbList;