import 'jquery.inputmask';
import 'inputmask.date.extensions';
import $ from 'jquery';
import Modal from './Modal'

import '../css/main.css';
import '../css/add.css';


$(document).ready(() => {
	$('.time-input').inputmask('hh:mm', {
		insertMode: false,
		clearIncomplete: true,
		placeholder: '  :  ',
		greedy: false,
		showMaskOnHover: false
	});
	
	$('.show-event-added').on('click', function () {
		new Modal('#event-added');
	});
	
	
	
});