// put your javascript code here
var category_template, animals_template, animal_template;

// variables to store the current displayed category and animals
var current_category = animals_data.category[0];
var current_animals = current_category.animals[0];
var current_animal = current_animals.image2;

function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

$(document).ready(function(){
	var source   = $("#category-template").html();
	category_template = Handlebars.compile(source);

	source   = $("#animals-template").html();
	animals_template = Handlebars.compile(source);

	source   = $("#animal-template").html();
	animal_template = Handlebars.compile(source);

$("#category-tab").click(function () {

		// displays the category template
		showTemplate(category_template, animals_data);

		// make the Animals tab the active one. Actually no need to do so.
		// first make the currently active tab inactive
		$(".nav-tabs .active").removeClass("active");
		// then make albums tab active
		$("#category-tab").addClass("active");


		$(".category-thumbnail").click(function (){
			
			var index = $(this).data("id");

			// set the current category to this category
			current_category = animals_data.category[index];

			// displays the Animals template
			showTemplate(animals_template, current_category);


			$(".animals-thumbnail").click(function (){
				var index = $(this).data("id");

				current_animal = current_category.animals[index];
				
				// displays the single animal template
				showTemplate(animal_template, current_animal);
			});
		});
	});

});
