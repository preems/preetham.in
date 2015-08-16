$(document).ready(function(){
	$('#sendbutton').click(function(){
		$(this).html("Sending...");
		$(this).prop('disabled',true);

		var data ={'name':$('#name').val(),
				   'email':$('#email').val(),
				   'phone':$('#phone').val(),
				   'message':$('#message').val()};

		$.post('/includes/sendmsg.php',data,function(){
			$('#sendbutton').html('Send');
			$('#sendbutton').prop('disabled',false);
			$('#name').val("");
			$('#email').val("");
			$('#phone').val("");
			$('#message').val("");
		});
	});
});