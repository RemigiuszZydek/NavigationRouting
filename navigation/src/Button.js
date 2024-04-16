import PropTypes from "prop-types";

function Button({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,
}) {
	return <button className="bg-red-500">{children}</button>;
}

Button.propTypes = {
	checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
		const count =
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!success) +
			Number(!!warning) +
			Number(!!danger);

		if (count > 1) {
			return new Error("Too many primary props");
		}
	},
};

export default Button;
