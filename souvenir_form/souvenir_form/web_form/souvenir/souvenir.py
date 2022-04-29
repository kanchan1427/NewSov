
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
def get_full_user_name(user = None):
	p = frappe.db.get_value("User", user,["first_name","middle_name","last_name"])
	s = " "
	s = s.join(p)
	return s

@frappe.whitelist()	
def get_contact_no(user = None):
	p = frappe.db.get_value("User", user, "mobile_no")
	return p

@frappe.whitelist()
def get_email(user = None):
	p = frappe.db.get_value("User", user, "email")
	return p	
    




	