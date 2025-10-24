import "./App.css";
import Button from "./components/button/button.jsx";
import Title from "./components/title/title.jsx";
import Description from "./components/description/description.jsx";
import Body from "./components/body/body.jsx";
import Header from "./components/header/header.jsx";
import Logo from "./components/logo/logo.jsx";
import Navigation from "./components/navigation/navigation.jsx";
import LoginButtons from "./components/login-buttons/login-buttons.jsx";
import BodySection from "./components/body-section/body-section.jsx";
import SearchForm from "./components/search-form/search-form.jsx";
import Input from "./components/input/input.jsx";
import Card from "./components/card/card.jsx";
import {useState} from "react";
import CardList from "./components/card-list/card-list.jsx";

function App() {

	const data = [
		{
			id: 1,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: false,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},
		{
			id: 2,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: false,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},{
			id: 3,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: false,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},{
			id: 4,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: false,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},{
			id: 5,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: false,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},{
			id: 6,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: false,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},{
			id: 7,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: false,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},{
			id: 8,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: false,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},{
			id: 9,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: false,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},{
			id: 10,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: false,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},{
			id: 11,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: true,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},{
			id: 12,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: false,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},{
			id: 13,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: true,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},{
			id: 14,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: false,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		},{
			id: 15,
			name: "Black Widow",
			url: "/public/BlackWidow.png",
			rating: 324,
			isFavorite: true,
			description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lectus orci. Aliquam vel sagittis ex. Maecenas in diam condimentum, hendrerit turpis id, bibendum ex. Aliquam cursus nisi magna, ut ultrices urna faucibus pulvinar. Ut fermentum consequat tortor, vel scelerisque quam condimentum nec. Morbi id porttitor quam, eget consequat leo. Vestibulum malesuada non quam faucibus malesuada. Proin rutrum, lectus sit amet egestas pretium, metus lorem commodo lorem, dictum commodo elit neque ac magna. Phasellus ultrices sollicitudin dui facilisis commodo. Nullam augue lacus, dapibus eget aliquam id, vestibulum eu dui. Integer id pretium velit. Duis maximus erat id egestas efficitur.\n" +
				"\n" +
				"Phasellus non dignissim tellus. Phasellus rhoncus sapien ante, eget pharetra augue pulvinar nec. Integer dapibus ipsum nec efficitur imperdiet. Vestibulum interdum magna sit amet lacinia tempor. Curabitur tincidunt eros ut pulvinar interdum. Aliquam blandit dictum arcu, sed volutpat nibh sodales vitae. Phasellus ultricies nisi est, in sollicitudin quam rhoncus eget. Praesent velit mi, laoreet sit amet pretium non, luctus sed ipsum.\n" +
				"\n" +
				"Vivamus tempus lorem eget ornare mattis. Fusce sed diam justo. Aliquam facilisis laoreet metus fermentum euismod. In et ullamcorper ipsum. Duis quam orci, rhoncus eget faucibus pretium, tempor eu tortor. Suspendisse in aliquam massa, vitae posuere felis. Curabitur in elit dignissim elit iaculis porttitor ut et magna. Nullam eu mi ligula. Nullam a ante vestibulum, pharetra enim in, lobortis nibh. Maecenas vitae odio tristique, posuere nisi at, elementum ante. Integer nisi justo, facilisis quis maximus quis, fringilla non massa. Fusce tellus velit, ornare vel laoreet et, sollicitudin eget sapien. Morbi rutrum massa purus, at sagittis lacus viverra eget. Phasellus tristique tempor est, blandit pharetra quam sodales eget. Morbi blandit aliquam gravida.\n" +
				"\n" +
				"Praesent tristique orci nec ligula venenatis, volutpat mollis sapien mollis. Donec dapibus rutrum risus ut sollicitudin. Etiam ligula nunc, malesuada nec arcu vel, ornare efficitur nibh. Aenean vel neque felis. Donec malesuada, sapien molestie porttitor pharetra, urna turpis consectetur purus, ac mollis orci lorem rhoncus dui. Proin et lacinia purus. Nullam tristique sodales eleifend. Mauris lobortis nisl libero, non tincidunt nulla facilisis vitae. Aenean suscipit eros nibh, a mollis libero facilisis ac. Praesent mollis nulla venenatis, mollis nulla ut, commodo turpis. Suspendisse eget vestibulum eros, vitae consequat diam. Sed elit est, tempus ut ante eget, consectetur pellentesque tortor. Quisque nisi mauris, volutpat pellentesque varius interdum, porta eu tellus. Fusce ex nisi, placerat vel dui sit amet, porta molestie purus.\n" +
				"\n" +
				"Cras tempor ac libero et fringilla. Nulla consectetur, ante et ornare pulvinar, lacus odio semper ex, porta efficitur lectus leo vitae leo. Nam vestibulum ligula in nibh ultricies lacinia. Integer commodo id sapien sit amet viverra. Nunc ut sagittis sem. Maecenas sit amet eleifend turpis. Nunc justo mi, efficitur vel sapien sed, lacinia aliquet sem. Morbi a nisi blandit sapien malesuada aliquet id ut arcu. Mauris pulvinar, ligula eu sagittis iaculis, massa mauris fermentum odio, vitae vehicula lorem eros sed lectus. Proin vel tortor eget augue finibus viverra. Aliquam dapibus orci elit, vitae consequat ex posuere molestie. Sed gravida metus eu dui convallis dictum. Cras molestie ante lectus, eget congue."
		}


	];

	const [stateData, setStateData] = useState(data);
	const [favoriteCount, setFavoriteCount] = useState(data.reduce((acc, item) => {
		if (item.isFavorite) acc++;
		return acc;
	}, 0));

	const updateFavorite = (id) => {
		setStateData([...stateData.map(item => {
			if (item.id === id) {
				item.isFavorite = !item.isFavorite;
				item.isFavorite ? setFavoriteCount(favoriteCount + 1) : setFavoriteCount(favoriteCount - 1);
			}
			return item;
		})]);

	};

	return (
		<>
			<Header>
				<Logo/>
				<Navigation
					favoriteCount={favoriteCount}
					onClick={() => console.log("!")}>
					<LoginButtons
						isLogin={false}
						userName={""}
					/>
				</Navigation>
			</Header>
			<Body>
				<BodySection>
					<Title
						className={""}
						text={"Поиск"}
					/>
					<Description
						className={""}
						text={"Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."}
					/>
					<SearchForm>

					</SearchForm>
				</BodySection>
				<>
					<CardList>
						{stateData.map(item => <Card
							props={item} key={item.id}
							setData={updateFavorite}
						/>)}
					</CardList>
				</>
			</Body>

		</>
	);
}

export default App;
