import $ from 'jquery'

import '../css/main.css';
import '../css/schedule.css';


document.addEventListener("DOMContentLoaded", function () {
	
	let hours = document.getElementsByClassName('schedule-room-hour');
	
	Array.from(hours).forEach(function (element) {
		element.addEventListener('click', function (e) {
			console.log(e);
			window.location.href = './add.html';
		});
	});
	
	
	document.getElementsByClassName('schedule-wrapper').item(0).addEventListener('scroll', function (e) {
		if (e.srcElement.scrollLeft > 140) {
			$('.schedule-room-info').addClass('--title-floating');
		} else {
			$('.schedule-room-info').removeClass('--title-floating');
		}
	}, false);
});


