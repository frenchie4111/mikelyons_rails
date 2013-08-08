$(document).ready(function()
{
	$(".top_content_menu_item").click( function()
	{
		var this_item = $(this).attr("id");
		console.log($(this).parent().attr("id"));
		$(this).parent().find(".top_content_menu_item").each(function() {
			$(this).removeClass("top_content_menu_item_selected");
		});
		$(this).addClass("top_content_menu_item_selected");
		var this_box = $("#" + $(this).parent().attr("id") + "_box");
		this_box.find(".top_content_box_item").each(function() {
			$(this).removeClass("top_content_box_item_selected")
		});
		this_box.find("#" + this_item + "_box").addClass("top_content_box_item_selected")
	});

	$("#i").toggle( function() {
		$("#top_content_area").hide();
		$("#ibox").show();
	}, function() {
		$("#top_content_area").show();
		$("#ibox").hide();
	});
});