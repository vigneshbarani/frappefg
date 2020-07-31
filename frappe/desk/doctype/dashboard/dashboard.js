// Copyright (c) 2019, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Dashboard', {
	refresh: function(frm) {
		frm.add_custom_button(__("Show Dashboard"), () => frappe.set_route('dashboard', frm.doc.name));
		// frm.set_query("chart", "charts", function(doc, cdt, cdn) {
		// 	return {
		// 		filters: {
		// 			is_standard: 1
		// 		}
		// 	};
		// });
	}
});
