import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseConfig } from "./firebase.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const fullName = document.getElementById("fullName").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const country = document.getElementById("country").value;

  // Paystack setup
  const handler = PaystackPop.setup({
    key: "YOUR_PAYSTACK_PUBLIC_KEY", // Replace with your key
    email: email,
    amount: 2000 * 100, // Example: ₦2000 (multiply by 100 because Paystack uses kobo)
    currency: "NGN",
    callback: async function(response) {
      alert("Payment successful! Reference: " + response.reference);

      try {
        // Store user in Firestore
        await addDoc(collection(db, "users"), {
          fullName,
          username,
          email,
          phone,
          country,
          reference: response.reference,
          createdAt: new Date().toISOString()
        });

        alert("Registration successful! You can now login.");
        document.getElementById("registerForm").reset();

      } catch (error) {
        console.error("Error saving user: ", error);
        alert("Error saving registration. Please contact support.");
      }
    },
    onClose: function() {
      alert("Transaction was not completed, window closed.");
    }
  });

  handler.openIframe();
});
