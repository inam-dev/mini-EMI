const backend = "http://localhost:5000";
import AccountOverview from "./AccountOverview";

export default function Home() {
  return (
    
    <div className="flex p-2 mx-4">
      <h3>Accounts</h3>
      <AccountOverview currency="GBP" balance="500" />
      <AccountOverview currency="USD" balance="500" />
    </div>
  )
}
