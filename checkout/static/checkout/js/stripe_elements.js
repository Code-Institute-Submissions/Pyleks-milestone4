// Core Logic for Stripe JS

// Fetches the stripe public key, and remove the comman on first and last, then store it inside stripe_public_key
// We do the same for both public and secret key


var stripe_public_key = $('#id_stripe_public_key').text().slice(1, -1);
var client_secret = $('#id_client_secret').text().slice(1, -1);
// create an instance of stripe public key
var stripe = Stripe(stripe_public_key);
var elements = stripe.elements();
var card = elements.create('card', {style: style});

// Make sure style object is defined before the card
var style = {
    base: {
        color: '#000',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
            color: '#aab7c4'
        }
    },
    invalid: {
        color: '#dc3545',
        iconColor: '#dc3545'
    }
};

// This is the card
card.mount('#card-element');