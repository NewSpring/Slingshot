
# Rock Data Models and Slingshot


**Rock Person Entity**

```json
{
  "Name": "Rock.Model.Person",
  "AssemblyName": "Rock.Model.Person, Rock, Version=1.4.0.0, Culture=neutral, PublicKeyToken=null",
  "FriendlyName": "Person",
  "IsEntity": true,
  "IsSecured": true,
  "IsCommon": true,
  "SingleValueFieldTypeId": 18,
  "MultiValueFieldTypeId": null,
  "Id": 15,
  "Guid": "72657ed8-d16e-492e-ac12-144c5e7567e7",
  "ForeignId": null,
  "ForeignGuid": null,
  "ForeignKey": null
}

```

**Attribute Queries**
```javascript

const neededAttributes = [
  {
    Key: "StripeCustomerId"
    Name: "Stripe Customer Id",
    FieldTypeId: 1,
    EntityTypeId: 15,
    Description: "Stripe Customer Id for use with Slingshot"
  },
  {
    Key: "StripeSubscriptionId"
    Name: "Stripe Subscription Id",
    FieldTypeId: 1,
    EntityTypeId: 15,
    Description: "Stripe Subscription Id for use with Slingshot"
  },
  {
    Key: "SlingshotIp"
    Name: "Slingshot Ip",
    FieldTypeId: 1,
    EntityTypeId: 15,
    Description: "Slingshot ip address of RockRMS instance"
  },
  {
    Key: "SlingshotSubdomain"
    Name: "Slingshot Subdomain",
    FieldTypeId: 1,
    EntityTypeId: 15,
    Description: "Slingshot subdomain address of RockRMS instance"
  },
  {
    Key: "SlingshotOrganizationName"
    Name: "Slingshot Organization Name",
    FieldTypeId: 1,
    EntityTypeId: 15,
    Description: "Slingshot organization name of RockRMS instance"
  },
  {
    Key: "SlingshotOrganizationSize"
    Name: "Slingshot Organization Size",
    FieldTypeId: 1,
    EntityTypeId: 15,
    Description: "Slingshot organization size of RockRMS instance"
  }
]

const missingAttributes = [];


for (const attr of neededAttributes) {
  const response = Rock.apiSync.get(`Attributes?$filter=Name eq '${attr.Name}' and EntityTypeId eq ${att.EntityTypeId}`);

  if (!response.length) {
    missingAttributes.push(attr);
  }
}

console.log(missingAttributes);
//
// if (missingAttributes.length) {
//   for (const attr of missingAttributes) {
//     // rock needed fields
//     attr.Order = 0;
//     attr.IsGridColumn = 0;
//     attr.IsMultiValue = 0;
//     attr.IsRequired = 0;
//     attr.AllowSearch = 0;
//
//
//     Rock.apiSync.put(`Attributes`, attr);
//   }
// }






```
