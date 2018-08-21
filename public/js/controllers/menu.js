function openMenu(){

	var items = document.getElementById('menu_body').style.display;
	if (items == 'none') {
		document.getElementById('menu_body').style.display = 'flex';
		document.getElementById('close_menu').style.display = 'block';
		document.getElementById('open_menu').style.display = 'none';
	}else{
		document.getElementById('menu_body').style.display = 'none';
		document.getElementById('close_menu').style.display = 'none';
		document.getElementById('open_menu').style.display = 'block';
	}
	
}