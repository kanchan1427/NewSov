# Copyright (c) 2022, sdc and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Souvenir(Document):
	pass

@frappe.whitelist()
def get_detail(user = None):
	p = frappe.db.get_value("User", user, ["email","user_image","mobile_no","birth_date","gender","location","full_name"])
	return p		
