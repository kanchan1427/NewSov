frappe.ready(function () {
    frappe.msgprint('Please fill all values carefully');


    // Validations for the Fields
    frappe.web_form.validate = () => {

        let data = frappe.web_form.get_values();
        console.log(data)
        var re = /^[A-Za-z]+$/;

        if (data.university_roll_no.toString().length > 7 || data.university_roll_no.toString().length < 7) {
            frappe.throw('Please Enter a Valid University Roll No.');
            return false;
        }
        

        else if (data.contact_no.toString().length > 10 || data.contact_no.toString().length < 10 ||data.contact_no == " " ) {
            frappe.throw('Please Enter a Valid phone number');
            return false;

        }
        

        else if (data.college_roll_no.toString().length > 7 || data.college_roll_no.toString().length < 7) {
            frappe.throw('Please Enter a valid College Roll NO.');
            return false;

        }
      

// Validates Friends deatils

     if(data.friend_1s_crn == null || data.friend_1s_urn == null || data.friend_2s_crn == null|| data.friend_2s_urn == null ){
        frappe.throw('Please Enter Friends Roll Numbers');
        if (data.friend_1s_crn.toString().length > 7 || data.friend_1s_crn.toString().length < 7) {
            frappe.throw('Please Enter a valid College_Roll NO.');
            return false;

        }

        else if (data.friend_1s_urn.toString().length > 7 || data.friend_1s_urn.toString().length < 7) {
            frappe.throw('Please Enter a Valid University_Roll No.');
            return false;
        }

        else if (data.friend_2s_urn.toString().length > 7 || data.friend_2s_urn.toString().length < 7) {
            frappe.throw('Please Enter a valid University_Roll NO.');
            return false;

        }

        else if (data.friend_2s_crn.toString().length > 7 || data.friend_2s_crn.toString().length < 7) {
            frappe.throw('Please Enter a valid College_Roll NO.');
            return false;

        }
        return true
    }

    return true

    }


})








