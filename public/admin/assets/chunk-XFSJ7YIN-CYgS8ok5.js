var t=(e,r)=>{const[a,l]={not_paid:[e("orders.payment.status.notPaid"),"red"],authorized:[e("orders.payment.status.authorized"),"orange"],partially_authorized:[e("orders.payment.status.partiallyAuthorized"),"red"],awaiting:[e("orders.payment.status.awaiting"),"orange"],captured:[e("orders.payment.status.captured"),"green"],refunded:[e("orders.payment.status.refunded"),"green"],partially_refunded:[e("orders.payment.status.partiallyRefunded"),"orange"],partially_captured:[e("orders.payment.status.partiallyCaptured"),"orange"],canceled:[e("orders.payment.status.canceled"),"red"],requires_action:[e("orders.payment.status.requiresAction"),"orange"]}[r];return{label:a,color:l}},s=(e,r)=>{const[a,l]={not_fulfilled:[e("orders.fulfillment.status.notFulfilled"),"red"],partially_fulfilled:[e("orders.fulfillment.status.partiallyFulfilled"),"orange"],fulfilled:[e("orders.fulfillment.status.fulfilled"),"green"],partially_shipped:[e("orders.fulfillment.status.partiallyShipped"),"orange"],shipped:[e("orders.fulfillment.status.shipped"),"green"],delivered:[e("orders.fulfillment.status.delivered"),"green"],partially_delivered:[e("orders.fulfillment.status.partiallyDelivered"),"orange"],partially_returned:[e("orders.fulfillment.status.partiallyReturned"),"orange"],returned:[e("orders.fulfillment.status.returned"),"green"],canceled:[e("orders.fulfillment.status.canceled"),"red"],requires_action:[e("orders.fulfillment.status.requiresAction"),"orange"]}[r];return{label:a,color:l}};export{t as a,s as g};
