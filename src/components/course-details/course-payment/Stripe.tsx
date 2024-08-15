import { useEffect, useState } from "react";
import {
  useCratePaymentMutation,
  useGetStripePkQuery,
} from "../../../redux/feature/order/orderApi";
import { useParams } from "react-router-dom";
import { useGetSingleCourseQuery } from "../../../redux/feature/course/courseApi";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const Stripe = () => {
  const { id } = useParams();
  const { data: stripePk } = useGetStripePkQuery(undefined);
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClintSecret] = useState("");
  const { data: course } = useGetSingleCourseQuery(id!, { skip: !id });
  const [cratePayment, { data: paymentData }] = useCratePaymentMutation();

  useEffect(() => {
    if (stripePk) {
      const pk = stripePk.pk;
      setStripePromise(loadStripe(pk));
    }
    if (course) {
      const amount = Math.round(course.data.price * 100);
      cratePayment({ amount });
    }
  }, [stripePk, course]);

  useEffect(() => {
    if (paymentData) {
      setClintSecret(paymentData.client_secret);
    }
  }, [paymentData]);

  return (
    <div>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm course={course} />
        </Elements>
      )}
    </div>
  );
};

export default Stripe;
