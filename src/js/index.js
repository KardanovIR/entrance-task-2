import $ from 'jquery';

import '../css/main.css';
import '../css/schedule.css';

class Modal {
	
	constructor(selector) {
		this.$el = $(selector);
		this.$parent = this.$el.parent();
		this.$el.addClass('open');
		this.$parent.addClass('modal-open');
	}
	
	close() {
		this.$parent.removeClass('modal-open');
		this.$el.removeClass('open');
	}
}

$(document).ready(() => {
	// $('.schedule-room-hour').on('click', function () {
	// 	window.location.href = '/add.html';
	// });
});