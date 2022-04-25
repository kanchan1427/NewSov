# from frappe import _
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
from frappe.utils import now

def get_context(context):
    pass 

	