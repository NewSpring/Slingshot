

import Rock from "../../../rock/server/api";
import Attribute from "../../../rock/server/methods/attributes"

const neededAttributes = [
  {
    Key: "StripeCustomerId",
    Name: "Stripe Customer Id",
    FieldTypeId: 1,
    EntityTypeId: 15,
    Description: "Stripe Customer Id for use with Slingshot"
  },
  {
    Key: "StripeSubscriptionId",
    Name: "Stripe Subscription Id",
    FieldTypeId: 1,
    EntityTypeId: 15,
    Description: "Stripe Subscription Id for use with Slingshot"
  },
  {
    Key: "SlingshotResourceGroup",
    Name: "Slingshot Resource Group",
    FieldTypeId: 1,
    EntityTypeId: 15,
    Description: "Name of Slingshot resource group and cname"
  },
  {
    Key: "SlingshotSubdomain",
    Name: "Slingshot Subdomain",
    FieldTypeId: 1,
    EntityTypeId: 15,
    Description: "Slingshot subdomain address of RockRMS instance"
  },
  {
    Key: "SlingshotOrganizationName",
    Name: "Slingshot Organization Name",
    FieldTypeId: 1,
    EntityTypeId: 15,
    Description: "Slingshot organization name of RockRMS instance"
  },
  {
    Key: "SlingShotGeneratedPassword",
    Name: "Slingshot Generated Password",
    FieldTypeId: 1,
    EntityTypeId: 15,
    Description: "Slingshot genertaed hash for verifying info"
  }
]


for (const attr of neededAttributes) {
  Attribute.create(attr);
}
