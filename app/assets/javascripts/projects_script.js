$(document).ready(function()
{
	$(".content_menu_item").click( function()
	{
		var this_item = $(this).attr("id");
		console.log($(this).parent().attr("id"));
		$(this).parent().parent().find(".content_menu_item").each(function() {
			$(this).removeClass("content_menu_item_selected");
		});
		$(this).addClass("content_menu_item_selected");
		var this_box = $("#" + $(this).parent().attr("id") + "_box");
		this_box.find(".content_box_item").each(function() {
			$(this).removeClass("content_box_item_selected")
		});
		this_box.find("#" + this_item + "_box").addClass("content_box_item_selected")
	});

	$("#i").toggle( function() {
		$("#content_area").hide();
		$("#ibox").show();
	}, function() {
		$("#content_area").show();
		$("#ibox").hide();
	});
});