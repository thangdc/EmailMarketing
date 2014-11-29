$(function () {
	$('#tblEmailExtractor').dataTable({
		"dom": 'T<"clear">lfrtip',
		"tableTools": {
			"sSwfPath": "/content/copy_csv_xls_pdf.swf"
		}
	});
	
	$('#tabs').tab();

	var mainUrl = 'http://vietsoftapi.apphb.com/api/emailMarketing';
	$('#btnExtractEmail').click(function () {
		$('.wait').show();
		$.post(mainUrl, { type: 1, content: $('#tbxCopyPasteContainer').val(), url: '' }, function (data) {
			$('#divScripts').html(data);
		});
	});

	$('#btnExtractEmailFromUrl').click(function () {
		$('.wait').show();
		$.post(mainUrl, { type: 3, content: '', url: $('#tbxUrl').val() }, function (data) {
			$('#divScripts').html(data);
		});
	});
});