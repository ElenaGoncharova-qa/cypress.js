describe('Покупка товаров', function () {

    it('Успешная покупка товаров', function () {
       cy.visit(' https://testqastudio.me/');
       cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('#cart-modal > .off-modal-layer').click();
       cy.get('[href="https://sh3910517.c.had.su"]').click();
       cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.get('.checkout').click();
       cy.get('#billing_first_name').type('Елена');
       cy.get('#billing_last_name').type('Гончарова');
       cy.get('#billing_address_1').type('город Москва, ул. Саларьевская 14к3');
       cy.get('#billing_city').type('Москва');
       cy.get('#billing_state').type('Москва');
       cy.get('#billing_postcode').type('465893');
       cy.get('#billing_phone').type('+79103547891');
       cy.get('#billing_email').type('qq@qq.ru');
       cy.get('#place_order').click();
       cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');



       })

})
