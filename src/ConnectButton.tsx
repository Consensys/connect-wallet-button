import { useAccount, useConnect, useDisconnect } from "wagmi";

type ConnectButtonProps = {
  className?: string;
};

const ConnectWalletButton: React.FC<ConnectButtonProps> = ({ className }) => {
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();

  const handleConnect = async () => {
    if (isConnected) {
      disconnect();
      return;
    }
    const connector = connectors[0];
    connect({ connector });
  };

  return (
    <button onClick={handleConnect} className={className ?? ""}>
      {isConnected ? "Disconnect" : "Connect Wallet"}
    </button>
  );
};

export default ConnectWalletButton;
