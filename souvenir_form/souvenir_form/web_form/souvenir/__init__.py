import frappe
import frappe.client
import frappe.handler
from frappe import _

@frappe.whitelist()
def get_full_user_name(user=None):
	p = frappe.db.get_value("User", user,["first_name","middle_name","last_name"])
	s = " "
	s = s.join(p)
	return s

@frappe.whitelist()	
def get_contact_no(user = None):
	p = frappe.db.get_value("User", user, "mobile_no")
	return p

@frappe.whitelist()
def get_email(user=None):
	p = frappe.db.get_value("User", user, "email")
	return p	