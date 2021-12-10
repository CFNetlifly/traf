import {opensea, titleImg} from 'images';

const footer = props => {
    return(
        <footer className="footer has-background-black py-5">
            <div className="container has-text-centered">

                <img src={titleImg} alt="" style={{width: "250px"}}/>

                <p>
                    <a href="https://twitter.com/TheRedApeFamily" target="_blank" className="ml-4" rel="noopener noreferrer">
                        <span className="icon has-text-white is-size-4">
                            <i className="fab fa-twitter"></i>
                        </span>
                    </a>
                    <a href="https://www.instagram.com/theredapefamily/" target="_blank" className="ml-4" rel="noopener noreferrer">
                        <span className="icon has-text-white is-size-4">
                            <i className="fab fa-instagram"></i>
                        </span>
                    </a>
                    <a href="https://www.youtube.com/channel/UCLCsACZQEeKOzjfbK2kIo9A" target="_blank" className="ml-4" rel="noopener noreferrer">
                        <span className="icon has-text-white is-size-4">
                            <i className="fab fa-youtube"></i>
                        </span>
                    </a>
                    <a  href="https://discord.gg/JeqSUsVQQC" target="_blank" className="ml-4" rel="noopener noreferrer">
                        <span className="icon has-text-white is-size-4">
                            <i className="fab fa-discord"></i>
                        </span>
                    </a>
                    <a href="https://opensea.io/collection/theredapefamily" target="_blank" className="ml-4 is-size-4" rel="noopener noreferrer">
                        <span className="icon has-text-white">
                            <img src={opensea} alt=""/>
                        </span>
                    </a>
                </p>
                <br/>

                <h1 className="subtitle has-text-warning is-6 mb-3"><a className="has-text-warning" href="https://whitepaper.theredapefamily.com/" target="_blank" rel="noopener noreferrer">Whitepaper</a></h1>
                <h1 className="subtitle has-text-warning is-6 mb-3">
                    <a className="has-text-warning" href="https://opensea.io/TRAF_VAULT" target="_blank" rel="noopener noreferrer">Giveaways' Vault</a>
                </h1>
                <h1 className="subtitle has-text-warning is-6 mb-3">
                    <a className="has-text-warning" href=" https://etherscan.io/address/0x38Ef1bF1503eFe695525211f5E2cEa9F7BD01cc3" target="_blank" rel="noopener noreferrer">Episode 1 Royalties Wallet</a>
                    &nbsp;
                    | 
                    &nbsp;
                    <a className="has-text-warning" href=" https://etherscan.io/address/0xce0aD44D305f803BBbA241B8cba8F2A975a88600" target="_blank" rel="noopener noreferrer">Episode 2 Royalties Wallet</a>
                </h1>
                <h1 className="subtitle has-text-warning is-6 mb-3">0xa803144e27aEf2Ac95E7Ab49214BD2f802C883dD</h1>                
                <h1 className="subtitle has-text-warning is-6 mb-3">traf@zainimedia.com</h1>     
                <h1 className="subtitle has-text-warning is-6 mb-3">© 2021 The Red Ape Family. All rights reserved</h1>
            </div>
        </footer>
    );
}

export default footer;
