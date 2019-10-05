(function () {

    angular.module('ShoppingListCheckOff', []).controller("ToBuyShoppingController", ToBuyShoppingController).controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController).service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyShoppingController(ShoppingListCheckOffService) {
        let toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
        toBuy.message = "Everything is bought!";
        toBuy.buy = function (item) {
            ShoppingListCheckOffService.buyItem(item);
        };
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        let alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getItemsBought();
        alreadyBought.message = "Nothing bought yet";
    }

    function ShoppingListCheckOffService() {
        let service = this;

        const LIST = [{
            name: 'cookies',
            quantity: 24
        }, {
            name: 'root beer',
            quantity: 2
        }, {
            name: 'ice cream',
            quantity: 2
        }, {
            name: 'boba milk tea',
            quantity: 2
        }, {
            name: 'honey',
            quantity: 1
        }, {
            name: 'Wheetabix',
            quantity: 2
        }];

        const itemsToBuy = LIST;
        const itemsBought = [];

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };

        service.buyItem = function (item) {
            let index = itemsToBuy.indexOf(item);
            if (index !== -1) {
                itemsToBuy.splice(index, 1);
                itemsBought.push(item);
            }
        };
    }

})();