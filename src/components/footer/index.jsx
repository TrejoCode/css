/**
 * @version 1.0.1
 * @author Trejocode - Sergio
 * @description Componente del Footer
*/

import React, { memo }  from 'react';
import Link             from 'next/link';
import { TiArrowSortedUp } from 'react-icons/ti';

const Footer = () => (
    <footer className="column">
        <div className="footer-top justify-center">
            <div className="container">
                <div className="row-responsive full">
                    <div className="column full">
                        <div className="white-space-24"></div>
                        <div className="logo justify-center align-center wow fadeInDown">
                            <a href="/" className="responsive-img">
                                <img src="/img/logo-white.png" alt="trejocode logo blanco" title="Trejocode logo blanco" />
                            </a>
                        </div>
                        <div className="white-space-24"></div>
                        <div className="top-page full justify-center">
                            <Link href = "#header">
                                <a className="justify-center align-center">
                                    <TiArrowSortedUp size = { '1.2rem' } />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default memo(Footer);