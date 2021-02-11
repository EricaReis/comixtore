import React from 'react';

import './styles.scss';
import { Media } from 'reactstrap';

//modelos de cards usando Media pra força de vendas

export default function ForcaDeVendas() {
    return (
        <div className='d-none d-md-flex container-forca-vendas mt-1'>
            <Media className="mx-auto">
                <Media left>
                    <i className="fab fa-whatsapp 3x" />
                </Media>
                <Media body>
                    <Media className="ml-3">
                        Whatsapp
                    </Media>
                </Media>
            </Media>
            <Media className="mx-auto">
                <Media left>
                    <i className="fa fa-lock" />
                </Media>
                <Media body>
                    <Media className="ml-3">
                        Site Seguro
                    </Media>
                </Media>
            </Media>
            <Media className="mx-auto">
                <Media left>
                    <i className="far fa-credit-card 3x" />
                </Media>
                <Media body>
                    <Media className="ml-3">
                        10x Sem Juros
                    </Media>
                </Media>
            </Media>
        </div >
    )
}
