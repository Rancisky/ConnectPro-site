// assets/config.js
// EDIT HERE when you want to change price / endpoints
window.APP_CONFIG = {
  MEMBERSHIP_FEE_NGN: 30000,          // ₦30,000 default, changeable
  CURRENCY: "NGN",
  PAYSTACK_PUBLIC_KEY: "pk_test_REPLACE_ME",  // put your Paystack public key here (test key while dev)
  VERIFY_PAYMENT_ENDPOINT: "https://us-central1-YOUR_PROJECT.cloudfunctions.net/verifyPayment" // update after deploying functions
};
