import React, { useState, useEffect } from "react";
import "./styles/search.css";

function SearchVerbs() {
    const [searchTerm, setSearchTerm] = useState("");
    const [verbs, setVerbs] = useState([]);
    const [result, setResult] = useState(null);

    useEffect(() => {
        // Cargar el archivo JSON con los verbos
        fetch("/verbs.json")
            .then(response => response.json())
            .then(data => {
                console.log("Datos cargados:", data); // Para verificar la estructura
                setVerbs(data); // Si el JSON es un array, usa `data` en lugar de `data.data`
            })
            .catch(error => console.error("Error loading verbs:", error));
    }, []);

    const handleSearch = (event) => {
        event.preventDefault();
        
        if (!verbs.length) {
            alert("Los datos aún no están cargados. Intente de nuevo en unos segundos.");
            return;
        }

        const searchLower = searchTerm.toLowerCase().trim();

        const verbFound = verbs.find(verb => 
            verb.simple_form.toLowerCase() === searchLower 
            //||(verb.meaning && verb.meaning.toLowerCase().includes(searchLower))
        );

        if (verbFound) {
            setResult(verbFound);
        } else {
            alert("Verbo no encontrado. Verifique la ortografía e inténtelo de nuevo.");
            setResult(null);
        }
    };

    return (
        <div>
            <form className="form-search" onSubmit={handleSearch} aria-label="Formulario">
                <label htmlFor="search-input" className="sr-only">Buscar verbo</label>
                <input
                    className="search-input"
                    type="search"
                    placeholder="Buscar verbo..."
                    maxLength={20}
                    required
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-required="true"
                    aria-label="Ingrese el verbo en inglés en presente"
                    tabIndex="0"
                />
                <button type="submit" aria-label="Consultar verbo" tabIndex="0">Consultar</button>
                <button className="material-symbols-outlined" 
                type="submit" 
                aria-label="Consultar verbo" 
                tabIndex="0"
                >
                    search
                </button>
            
            </form>
            {result && (
                <div className="results" role="region" aria-live="polite" tabIndex="0">
                    <ul>
                        <li tabIndex="0"><strong>Infinitivo:</strong> {result.simple_form}</li>
                        <li tabIndex="0"><strong>Tercera Persona:</strong> {result.third_person}</li>
                        <li tabIndex="0"><strong>Pasado Simple:</strong> {result.simple_past}</li>
                        <li tabIndex="0"><strong>Pasado Participio:</strong> {result.past_participle}</li>
                        <li tabIndex="0"><strong>Gerundio:</strong> {result.gerund}</li>
                        <li tabIndex="0"><strong>Traducción:</strong> {result.meaning}</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchVerbs;
