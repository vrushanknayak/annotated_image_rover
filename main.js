$("body").on("click", ".dot", function (e) {
	//on click add an active class to the dot that was clicked
	e.preventDefault();

	const $this_dot = $(this);

	$this_dot.addClass("active");
});

$("body").on("click", ".dot .close", function (e) {
	//on click add an active class to the dot that was clicked
	e.preventDefault();
	e.stopPropagation();

	const $this_close = $(this);
	const $this_dot = $this_close.closest(".dot")

	$this_dot.removeClass("active");
});