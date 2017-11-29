function retTemplate(data){
	return `<div class="lead reminder-text">
            <p>Dear Parents,</p>
            <p>This is in regard for late fee for your ward ${data['A']} . The monthly installment of Rs. ${data['B']} has not been submitted till now. The last date for fee submission is 27.08.2017.</p>
            <p>Late fee is liable for fine. Kindly, submit fee on time.</p>
            <br>
            <p>Regards</p>
           <p style="font-weight: bold;">Maharaja Academy</p>
          </div>`;
}

$(function(){

	var student = {
      data: [],
      cacheDom: function () {
      	this.$reminderContainer = $('#reminder-container');
      },
      render: function () {
      	for(var i in this.data){
      		if(i!=0){
      			this.$reminderContainer.append(retTemplate(this.data[i]));
      		}
      	}
      },
      init: function () {
      	this.cacheDom();
      	this.$reminderContainer.empty();
      	this.render();
      },
	};

	$.getJSON('./data.json', function(json, textStatus) {
		student.data = json;
		student.init();
	});
	
});