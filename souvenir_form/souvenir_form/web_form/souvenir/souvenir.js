frappe.ready(function() {
  frappe.web_form.after_load=()=>{
   frappe.msgprint('Please fill all values carefully');


     frappe.web_form.on('contact_no',(field,value)=>{
        if (value.toString().length > 10 || value.toString().length < 10 ) {
         frappe.throw('Please Enter a Valid phone number');
         field.set_value(0);

     }
   
     });

     frappe.web_form.on('university_roll_no',(field,value)=>{
      if (value.toString().length > 7 || value.toString().length < 7 ) {
       frappe.throw('Please Enter a Valid University Roll No.');
       field.set_value(0);

   }
 
   });

   frappe.web_form.on('college_roll_no',(field,value)=>{
      if (value.toString().length > 7 || value.toString().length < 7 ) {
       frappe.throw('Please Enter a valid Roll NO.');
       field.set_value(0);

   }
 
   });

// Friends data validation

frappe.web_form.on('friend_1s_urn',(field,value)=>{
   if (value.toString().length > 7 || value.toString().length < 7 ) {
    frappe.throw('Please Enter a Valid University_Roll No.');
    field.set_value(0);

}

});

frappe.web_form.on('friend_1s_crn',(field,value)=>{
   if (value.toString().length > 7 || value.toString().length < 7 ) {
    frappe.throw('Please Enter a valid College_Roll NO.');
    field.set_value(0);

}

});

frappe.web_form.on('friend_2s_urn',(field,value)=>{
   if (value.toString().length > 7 || value.toString().length < 7 ) {
    frappe.throw('Please Enter a Valid University_Roll No.');
    field.set_value(0);

}

});

frappe.web_form.on('friend_2s_crn',(field,value)=>{
   if (value.toString().length > 7 || value.toString().length < 7 ) {
    frappe.throw('Please Enter a valid College_Roll NO.');
    field.set_value(0);

}

});
frappe.web_form.on('friend_2s_crn',(field,value)=>{
   if (value.toString().length > 7 || value.toString().length < 7 ) {
    frappe.throw('Please Enter a valid College_Roll NO.');
    field.set_value(0);

}

});


//  Name Validationz

frappe.web_form.on('name1',(field,value)=>{
   if (!isNaN(value) || value == " ") {
    frappe.throw('Please Enter the valid name');
    field.set_value(0);

}

});




  }
})
