/**
 * @version 1.0.1
 * @author Trejocode - Sergio
 * @description Componente de navegación <Aside>
*/

import React 	from 'react';

const Aside = () => {

    return(
        <div className="aside justify-center">
			<div className="container column">
                <ul>
                    <li className="level active">
                        📌 Introducción
                    </li>
                    <li className="level-container">
                        <ul>
                            <li className="level">
                                📝 Implementación
                            </li>
                            <li className="sublevel">
                                CSS
                            </li>
                            <li className="sublevel">
                                SASS
                            </li>
                        </ul>
                    </li>
                    <li className="level-container">
                        <ul>
                            <li className="level">
                                ✔️ Conceptos
                            </li>
                            <li className="sublevel">
                                Básicos
                            </li>
                            <li className="sublevel">
                                .flex
                            </li>
                            <li className="sublevel">
                                .container
                            </li>
                            <li className="sublevel">
                                .full
                            </li>
                            <li className="sublevel">
                                .auto
                            </li>
                        </ul>
                    </li>
                    <li className="level-container">
                        <ul>
                            <li className="level">
                                🔃 Dirección
                            </li>
                            <li className="sublevel">
                                .row
                            </li>
                            <li className="sublevel">
                                .column
                            </li>
                            <li className="sublevel">
                                .row-responsive
                            </li>
                        </ul>
                    </li>
                    <li className="level-container">
                        <ul>
                            <li className="level">
                                🔛 Justificación
                            </li>
                            <li className="sublevel">
                                .justify-start
                            </li>
                            <li className="sublevel">
                                .justify-center
                            </li>
                            <li className="sublevel">
                                .justify-end
                            </li>
                            <li className="sublevel">
                                .justify-between
                            </li>
                            <li className="sublevel">
                                .justify-arround
                            </li>
                        </ul>
                    </li>
                    <li className="level-container">
                        <ul>
                            <li className="level">
                                🔝 Alineación
                            </li>
                            <li className="sublevel">
                                .align-start
                            </li>
                            <li className="sublevel">
                                .align-center
                            </li>
                            <li className="sublevel">
                                .align-end
                            </li>
                        </ul>
                    </li>
                    <li className="level-container">
                        <ul>
                            <li className="level">
                                🔣 Agrupación
                            </li>
                            <li className="sublevel">
                                .wap
                            </li>
                            <li className="sublevel">
                                .nowrap
                            </li>
                        </ul>
                    </li>
                    <li className="level">
                        ⏸️ Espacios en blanco
                    </li>
                    <li className="level-container">
                        <ul>
                            <li className="level">
                                🖼️ Imágenes
                            </li>
                            <li className="sublevel">
                                .responsive-img
                            </li>
                            <li className="sublevel">
                                .cover-img
                            </li>
                            <li className="sublevel">
                                .contain-img
                            </li>
                        </ul>
                    </li>
                    <li className="level-container">
                        <ul>
                            <li className="level">
                                📝 Decoradores de texto
                            </li>
                            <li className="sublevel">
                                .text-left
                            </li>
                            <li className="sublevel">
                                .text-center
                            </li>
                            <li className="sublevel">
                                .text-right
                            </li>
                            <li className="sublevel">
                                .text-justify
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
		</div>
    );

};

export default Aside;