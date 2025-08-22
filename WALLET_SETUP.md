# Wallet Connection Setup

## WalletConnect Project ID Configuration

To enable full wallet connectivity, you need to configure a WalletConnect Project ID:

1. Visit [WalletConnect Cloud](https://cloud.walletconnect.com)
2. Create a new project or use an existing one
3. Copy your Project ID
4. Update the `src/lib/wagmi.ts` file:
   ```typescript
   export const config = getDefaultConfig({
     appName: 'Qoder01 Web3 App',
     projectId: 'YOUR_ACTUAL_PROJECT_ID_HERE', // Replace with your Project ID
     chains: [mainnet, polygon, arbitrum, base],
     ssr: true,
   });
   ```

## Supported Features

- ✅ MetaMask wallet connection
- ✅ WalletConnect protocol support
- ✅ Coinbase Wallet integration
- ✅ Multi-chain support (Ethereum, Polygon, Arbitrum, Base)
- ✅ Responsive design
- ✅ Dark/Light mode support

## Usage

1. Visit `http://localhost:3000`
2. Click "Connect Wallet" in the top right corner
3. Select your preferred wallet from the modal
4. Follow the wallet-specific connection flow

## File Structure

```
src/
├── lib/
│   └── wagmi.ts              # Wagmi configuration
├── components/
│   ├── WalletProviders.tsx   # Provider wrapper
│   ├── Header.tsx            # Header with connect button
│   └── PageLayout.tsx        # Main layout component
└── app/
    ├── layout.tsx            # Root layout with providers
    ├── page.tsx              # Minimal homepage
    └── globals.css           # Updated with new CSS variables
```

## Next Steps

1. Configure your WalletConnect Project ID
2. Test wallet connections
3. Customize the UI theme if needed
4. Add wallet-dependent features to your app