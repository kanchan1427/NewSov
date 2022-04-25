# Copyright (c) 2022, sdc and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Souvenir(Document):
	pass
	# def before_save(self):
	# 	self.name1 = frappe.db.get_value("User",{"name":frappe.session.user},"full_name")
