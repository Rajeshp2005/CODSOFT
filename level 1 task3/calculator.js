
$('div').each( function() {
    orgText = $(this).html();
    newText = orgText.replace('posted','');
    $(this).html(newText);
  });