
# from frappe.model.document import Document

# import frappe
# # from frappe.utils import now

# class souvenir(Document):
# 	def validation(self):
# 		self.get_value()


# 	def get_value(self):
# 		first_name,last_name = frappe.db.get_value('user',frappe.session.user,['first_name','last_name','contact_no'])
# 		frappe.msgprint(_("The Firstname is {0} and last Name is {1} ")).format(first_name,last_name)	

from __future__ import unicode_literals
import frappe
from frappe import _
import frappe.client
import frappe.handler

def get_context(context):
    pass

@frappe.whitelist()
def get_detail(user = None):
	p = frappe.db.get_value("User", user, ["email","user_image","mobile_no","birth_date","gender","location","full_name"])
	return p	
        
@frappe.whitelist()
def get_details(user = None):
	p = frappe.db.get_value("Souvenir", user, ["email","image","contact_no","date_of_birth","gender","address","name1"])
	return p	
        



	