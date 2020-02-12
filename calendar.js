//
//	ロード時
//
function body_OnLoad() {
	// 現在の年を取得してデフォルト入力
	var iYear = new Date().getFullYear();
	document.getElementById("tbx_Year").value = iYear;
	populateCalendars(iYear);
	return;
}
//
//	クリック時
//
function tbx_Year_Enter(){
	if (event.keyCode == 13){
		var iYear = document.getElementById("tbx_Year").value;
		populateCalendars(iYear);
	}
	return;
}


//
//	表作成
//
function populateCalendars(iYear) {
	
	var divPrint = document.getElementById("divPrint");
 
 // 一旦画面上の印刷用 div 内を全てクリア
	while(divPrint.firstChild){
		divPrint.removeChild(divPrint.firstChild);
	}
	
	for(var iMonth = 1; iMonth <= 12; iMonth++){
		var secNthMonth = document.getElementById("secTemplate").cloneNode(true);
		secNthMonth.id = "sec" + iMonth;
		// カレンダーに日付を記入
//		fillCalendar(secNthMonth, iYear, iMonth);
  // メモ欄を作成
//		createMemoField(secNthMonth);

// ページセクションをアペンド
		divPrint.appendChild(secNthMonth);
		if(iMonth%2==0 && iMonth != 12){
		}
	}
	return;
}
