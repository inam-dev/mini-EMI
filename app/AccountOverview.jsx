import Link from "next/link";

export default async function AccountOverview({ currency, balance }) {
	return (
		<Link href={`/accounts/${currency}`}>
			<div className="p-5 mr-5 my-2 border-solid border-black border-2 rounded-lg">
				<h3 className="fs-200">{currency} Account</h3>
				<p>Balance: {balance} {currency}</p>
			</div>
		</Link>
	);
}