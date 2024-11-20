import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import CheckoutCartItem from "../components/Checkout/CheckoutCartItem";
import ActiveLastBreadcrumb from "../components/common/components/Link";
import { auth, firestore } from "../Auth/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import i18n from "../components/common/components/LangConfig";

const Checkout = () => {
  const { cartItems } = useCart();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(firestore, "users", userId);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
          setEmail(userData.email);
        } else {
          console.log("User document not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal;

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: phoneNumber,
          amount: total,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message || "Payment processed successfully!");
        navigate("/order-summary");
      } else {
        setMessage(data.error || "Payment failed.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-36 md:mt-48 flex flex-col md:gap-10">
      <ActiveLastBreadcrumb
        path={`${i18n.t("home")}/${i18n.t("redButtons.applyCoupon")}`}
      />
      <form onSubmit={handlePayment}>
        <div className="flex items-center mt-4 md:flex-row flex-col gap-10 md:gap-40">
          <div className="flex flex-col gap-4 md:gap-12">
            <h2 className="text-2xl md:text-4xl font-medium">
              {i18n.t("Payment Details")}
            </h2>

            <div className="flex flex-col gap-4 md:gap-8">
              <div>
                <label className="text-sm md:text-base text-gray-400">
                  {i18n.t("checkOut.phone")} *
                </label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="rounded bg-gray-100 px-4 py-3 text-gray-400 focus:border focus:outline-none focus:border-gray-300"
                />
              </div>

              <div>
                <label className="text-sm md:text-base text-gray-400">
                  {i18n.t("checkOut.amount")} *
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={total}
                  readOnly
                  className="rounded bg-gray-100 px-4 py-3 text-gray-400 focus:border focus:outline-none focus:border-gray-300"
                />
              </div>

              <div>
                <label className="text-sm md:text-base text-gray-400">
                  {i18n.t("checkOut.email")} *
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="rounded bg-gray-100 px-4 py-3 text-gray-400 focus:border focus:outline-none focus:border-gray-300"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-[425px]">
            {cartItems.map((item, index) => (
              <CheckoutCartItem key={item.title} item={item} index={index} />
            ))}

            <div className="border-t pt-4">
              <div className="flex justify-between">
                <p className="text-base">{i18n.t("cart.subtotal")}:</p>
                <p className="text-base">Ksh.{subtotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base">{i18n.t("cart.shipping")}:</p>
                <p className="text-base">{i18n.t("cart.free")}</p>
              </div>
              <div className="flex justify-between font-bold">
                <p className="text-base">{i18n.t("cart.total")}:</p>
                <p className="text-base">Ksh.{total}</p>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`mt-8 px-6 py-3 rounded text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600"
          }`}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
        {message && (
          <p
            className={`mt-4 text-center ${
              message.includes("success")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
