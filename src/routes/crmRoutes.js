import {
    addnewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
}
    from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)


        //Post EndPoint
        .post(addnewContact);

    app.route('/contact/:contactID')
        //Get a specific contact   
        .get(getContactWithID)
        //Updating a specific contact
        .put(updateContact)
        //Deleting a specific contact
        .delete(deleteContact);
}

export default routes;