app.directive('mySharedScope', function () {
    return {
        template: 'Name: {{customer.name}}<br /> Street: {{customer.street}}'
    };
});
