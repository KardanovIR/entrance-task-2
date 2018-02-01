import $ from 'jquery';

import '../css/main.css';
import '../css/schedule.css';


$(document).ready(() => {
	$('.schedule-room-hour').on('click', function () {
		window.location.href = '/add.html';
	});
});