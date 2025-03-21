Feature: Search product in web
    
    @sebiche
    Scenario: An user can search a product in website and remove for the cart.

        Given I open the web navigator and enter url 
        When I search a product in searchbox
        #And I selected the first option