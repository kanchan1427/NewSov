// Copyright (c) 2022, sdc and contributors
// For license information, please see license.txt

frappe.ui.form.on('Souvenir', {
	// refresh: function(frm) {
		onload:function(frm){
			frappe.call({
				method: "souvenir_form.souvenir_form.web_form.souvenir.souvenir.get_detail",
				args:{"user": frappe.session.user },
				callback: (data) => {
					if (data.message) {
							
						frm.set_value("email",data.message[0])
						frm.set_value("image",data.message[1])
						frm.set_value("contact_no",data.message[2])
						frm.set_value("date_of_birth",data.message[3])
						frm.set_value("gender",data.message[4])
						frm.set_value("address",data.message[5])
						frm.set_value("name1",data.message[6])
					}
				}
			});
	
	}
	// 
	});
		


