// Copyright (c) 2022, sdc and contributors
// For license information, please see license.txt

frappe.ui.form.on('Souvenir', {
	// refresh: function(frm) {
		onload:function(frm){
		frappe.call({
			method: "souvenir_form.souvenir_form.doctype.__init__.get_full_user_name",
			args: {"user": frappe.session.user },
			callback: function(r) {
				if(r.message) {
					frm.set_value("name1", r.message)
				}
			}
		})

		frappe.call({
			method: "souvenir_form.souvenir_form.doctype.__init__.get_contact_no",
			args: {"user": frappe.session.user },
			callback: function(r) {
				if(r.message) {
					frm.set_value("contact_no", r.message)
					
				}
			}
		})
		frappe.call({
			method: "souvenir_form.souvenir_form.doctype.__init__.get_email",
			args: {"user": frappe.session.user },
			callback: function(r) {
				if(r.message) {
					frm.set_value("email", r.message)
					
				}
			}
		})
	
	}
	// 
	});
		


