import "./App.css";
import { useMemo } from "react";

import Minter from "./Minter";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getMathWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";

import arg from './images/collection1/arg.jpg';
import trophy1 from './images/collection1/Collection1ChampionGIF.gif';
import neonvein from './images/collection2/NeonVine.jpg';
import sophie from './images/collection2/artistsophoie.jpg';
import background from "./images/collection2/80scontent.jpg";
const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
  : undefined;

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSolletWallet(),
      getMathWallet(),
    ],
    []
  );

  function toggleMenu() {
    const menu = document.getElementById("mobileNavContainer")!;
    menu.classList.toggle("open-menu");
    console.log("pressed");
  }

  return (
    <div>
    <div id="mobileNavContainer" className="mobile-nav">
      <div className="mobile-nav-close-button" >
        <img src="/icons/close.svg" alt="" onClick={toggleMenu} />
      </div>
      <SocialIcon className="social-icons" style={{ height: 10, width: 10, marginRight: 10 }} url="https://twitter.com/CryptoNine3D" />
      <SocialIcon className="social-icons" style={{ height: 10, width: 10 }} url="https://discord.gg/n38Nynft" />
    </div>
    <div className="mobile-menu-button" onClick={toggleMenu}>
      <img src="/icons/menu.svg" alt="" />
    </div>     
    <nav>
      <div className="nav-container">
        <SocialIcon className="social-icons" style={{ height: 10, width: 10, marginRight: 10 }} url="https://twitter.com/CryptoNine3D" />
        <SocialIcon className="social-icons" style={{ height: 10, width: 10 }} url="https://discord.gg/n38Nynft" />
      </div>
    </nav>
    <div className="content-wrapper" >
      <header className="card" style={{ backgroundImage: `url(${background})`, color: "white" }}>
        <div style={{ padding: "0 24px 0 24px 0" }} >
          <h3>Welcome To</h3>
          <h1 className="pb-3">Collection 2 - POGS</h1>
          <p>
          Milk Caps is a children's game played with flat circular cardboard milk caps. Players make a stack of these caps, and take turns to drop a heavier "slammer" object onto it, causing the caps to be disrupted.
          Each player keeps any face-up caps and is to restack the face-down caps, repeating the process until none land face-down, at which point the player who collected the most caps wins the game of Milk Caps.
          The game is also known as Pogs, under which name it was sold commercially in the 1990s. The name originates from Pog, a brand of juice made from passionfruit, orange, and guava; the use of the juice's caps to play the game preceded the game's commercialization.
          </p>
        </div>
        <div>
          <ThemeProvider theme={theme}>
            <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect>
                <WalletDialogProvider>
                  <Minter
                    candyMachineId={candyMachineId}
                    connection={connection}
                    startDate={startDateSeed}
                    txTimeout={txTimeout}
                    rpcHost={rpcHost}
                  />
                </WalletDialogProvider>
              </WalletProvider>
            </ConnectionProvider>
          </ThemeProvider>
        </div>
      </header>
      <header className="card header-3" style={{ backgroundImage: `url(${background})`, color: "white" }}>
        <div>
          <h2 className="pb-3">Neonvein#7298</h2>
          <p><a target="_blank" href="https://www.artstation.com/neonvein" rel="noreferrer">ArtStation</a>&nbsp;&nbsp;&nbsp;&nbsp;<a target="_blank" href="https://instagram.com/neon_.vein?utm_medium=copy_link" rel="noreferrer">Intagram</a></p>
          <img src={neonvein} alt="Neonvein"></img>
          <p>Marmoset toolbag, Blender, Substance Painter</p>
        </div>
        <div style={{ padding: "0 0 0 0" }}>
          <h2 className="pb-3">ArtistSophie#0564</h2>
          <p><a target="_blank" href="https://twitter.com/ArtistSophie1" rel="noreferrer">Twitter</a></p>
          <img src={sophie} alt="ArtistSophie"></img>
          <p>Blender</p>
        </div>
      </header>
      <div className="card" style={{ margin: "0 0 40px 0", textAlign: "center",backgroundImage: `url(${background})`, color: "white" }}>
        <div className="card-header">
          <h1 className="pb-3">Collection 1 Winner</h1>
        </div>
        <div className="card-body">
            <p><a target="_blank" href="https://argylle.art/" rel="noreferrer">Portfolio</a></p>
            <img src={arg} alt="ARGYLLE"></img>
            <img src={trophy1} alt="collection1trophy" style={{ height: "175px", width: "175px" }}/>
            <h3>
            WL into ALL future collections here <a target="_blank" href="https://www.magiceden.io/marketplace/crypto_nine_3d" rel="noreferrer">Collection 1</a>
          </h3>
        </div>
      </div>
      <header className="card" style={{ backgroundImage: `url(${background})`, color: "white" }}>
        <div style={{ padding: "0 0 0 0" }}>
          <div>
            <h1 className="pb-3">Collection 3</h1>
          </div>
          <div>
            <h3>
              Join our <a target="_blank" href="https://discord.gg/UwBmvmjnqJ" rel="noreferrer">Discord</a> to Vote
            </h3>
          </div>
        </div>
      </header>
    </div>
  </div>
  );
};

export default App;
