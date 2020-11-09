export interface PunchaseFormValues {
  shippingName?: string;
  shippingPhone?: string;
  shippingStreet?: string;
  shippingDetails?: string;
  shippingCity?: string;
  shippingCountry?: string;
  shippingZip?: string;
  billingName?: string;
  billingEmail?: string;
  billingStreet?: string;
  billingDetails?: string;
  billingCity?: string;
  billingCountry?: string;
  billingZip?: string;
  paymentCardName?: string;
  paymentCardNumber?: string;
  paymentCardDate?: string;
  paymentCardCode?: string;
}

export interface PunchaseValidErrors {
  shippingName?: string[];
  shippingPhone?: string[];
  shippingStreet?: string[];
  shippingDetails?: string[];
  shippingCity?: string[];
  shippingCountry?: string[];
  shippingZip?: string[];
  billingName?: string[];
  billingEmail?: string[];
  billingStreet?: string[];
  billingDetails?: string[];
  billingCity?: string[];
  billingCountry?: string[];
  billingZip?: string[];
  paymentCardName?: string[];
  paymentCardNumber?: string[];
  paymentCardDate?: string[];
  paymentCardCode?: string[];
}

export interface Punchase {
  stage: number;
  validate: boolean;
  valid_errors: PunchaseValidErrors;
}
