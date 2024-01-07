import * as yup from "yup";
import { OrderForm } from "@/types/types";

const phoneRegex = /^$|^[0-9]{10}$/;

const shippingAddressSchema = yup.object({
  shippingFirstName: yup.string().required("This field cannot be empty"),
  shippingLastName: yup.string().required("This field cannot be empty"),
  shippingAddress: yup.string().required("This field cannot be empty"),
  shippingCity: yup.string().required("This field cannot be empty"),
  shippingState: yup.string().required("This field cannot be empty"),
  shippingZipCode: yup
    .string()
    .matches(/^\d{5}$/, "Must be a 5 digit Zip Code")
    .required("This field cannot be empty"),
  shippingPhone: yup
    .string()
    .nullable()
    .notRequired()
    .matches(phoneRegex, "Must be exactly a 10 digit US number or empty"),
});

const billingAddressSchema = yup.object({
  billingFirstName: yup.string().required("This field cannot be empty"),
  billingLastName: yup.string().required("This field cannot be empty"),
  billingAddress: yup.string().required("This field cannot be empty"),
  billingCity: yup.string().required("This field cannot be empty"),
  billingState: yup.string().required("This field cannot be empty"),
  billingZipCode: yup
    .string()
    .matches(/^\d{5}$/, "Must be a 5 digit Zip Code")
    .required("This field cannot be empty"),
  billingPhone: yup
    .string()
    .nullable()
    .notRequired()
    .matches(phoneRegex, "Must be exactly a 10 digit US number or empty"),
});

export const orderFormValidationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("This field cannot be empty"),
  sendOffers: yup.boolean().required("This field cannot be empty"),
  shippingAddress: shippingAddressSchema,
  shippingBillingIsSame: yup.boolean().required("This field cannot be empty"),
  billingAddress: yup.lazy((values, { parent }) =>
    parent.shippingBillingIsSame
      ? yup.object().nullable().notRequired()
      : billingAddressSchema,
  ),
});

export const defaultOrderFormValues: Partial<OrderForm> = {
  sendOffers: false,
  shippingBillingIsSame: true,
};
