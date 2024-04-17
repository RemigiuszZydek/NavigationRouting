import Button from "./Button";
import { GoBell, GoDownload, GoDatabase } from "react-icons/go";

function App() {
	const handleClick = () => {
		console.log("CLICK");
	};
	return (
		<div>
			<div>
				<Button onClick={handleClick} primary>
					<GoBell></GoBell>Buy Now
				</Button>
			</div>
			<div>
				<Button secondary outline>
					<GoDownload></GoDownload>See Deal!
				</Button>
			</div>
			<div>
				<Button warning>
					<GoDatabase></GoDatabase>Hide Ads!
				</Button>
			</div>
			<div>
				<Button danger outline rounded>
					Return ME
				</Button>
			</div>
			<div>
				<Button success rounded>
					Something
				</Button>
			</div>
		</div>
	);
}
export default App;
