import * as elements from "typed-html";

type BaseHtmlProps = {
	title: string;
	children: elements.Children;
}

const BaseHtml = ({ children }: elements.Children, title: string) => `
<!DOCTYPE html>
<html lang="en">

<html lang="en" class="h-full bg-gray-100">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<title>${title}</title>
    <link href="/styles.css" rel="stylesheet">
	</head>
	<body class="h-full">
		<!-- TODO: Light/Dark switcher -->
		${children}

		<script src="https://unpkg.com/htmx.org@1.9.5"></script>
		<script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
		<script src="https://code.iconify.design/3/3.1.1/iconify.min.js"></script>
	</body>
</html>
`;

export default BaseHtml;