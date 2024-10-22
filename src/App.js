import "./App.css";
import CardSection from "./Components/Card";
import Footer from "./Components/Footer";
import FormSection from "./Components/FormSection";
import NavbarSection from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet } from '@reown/appkit/networks'

AOS.init(); // Initialize AOS

// 1. Get projectId
const projectId = '576b92fda187442242188359a37d6ce5';

// 2. Set the networks
const networks = [mainnet];

// 3. Create a metadata object - optional
const metadata = {
  name: 'Staking | Compute Credits',
  description: 'Compute Credits ($CPC) is a decentralized marketplace revolutionizing the way you access high-performance compute resources.',
  url: 'https://staking.computecredits.io', // origin must match your domain & subdomain
  icons: ['https://staking.computecredits.io/fav.png']
}

// 4. Create a AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

function App() {
  return (
    <>
      <NavbarSection />
      <div className="bg-black px-4 sm:px-6 md:px-8 xl:px-[120px] pb-16 sm:pb-20 md:pb-24">
        <div className="pt-10">
          <CardSection />
          <FormSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
