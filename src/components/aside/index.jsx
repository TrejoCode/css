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
                    <li className="level">
                        📝 Implementación
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
                </ul>
            </div>
		</div>
    );

};

export default Aside;