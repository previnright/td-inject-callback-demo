$('body').append('<div style="z-index: 10; position: fixed;bottom: 0;right: 0;padding-left:30px; padding-bottom: 30px;"><div id="redirect" style="background-color: #172241; padding: 25px; border-radius: 10px;"><h5 style="text-align: center; color:white"><b>talkdesk</b> callback</h5><br><form class="pure-form"><input id="check" type="text" placeholder="ex: 4081231234"><br><br><button type="submit" style="display: block; margin-left: auto;margin-right: auto;">Submit</button></form></div></div>');
document.querySelector('form.pure-form').addEventListener('submit', function (e) {
	var test3 = document.getElementById('check').value;
    e.preventDefault();
    console.log(test3);
    link = 'https://td-callback.herokuapp.com/?talkdesk_phone_number=4807814730&contact_phone_number=' + test3;
    console.log(link);
	$.ajax({
	    url: link,
	    type: 'GET',
	    crossDomain: true
	})
	document.getElementById("redirect").innerHTML = "<p style='text-align:center; margin-top:5%; color: white'><strong><a>Talk soon :)</a><strong></p>"
});
