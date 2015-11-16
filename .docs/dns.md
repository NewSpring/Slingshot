# DNS

[Azure DNS API](https://msdn.microsoft.com/en-us/library/azure/mt130640.aspx)

## Vars

api-version = 2015-05-04-preview
subscription-id
resource-group-name
zoneName
recordType
recordSetName
Content-Type = application/json
Authorization = token from azure active directory

## Create CNAME

PUT

https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}/{recordType}/{recordSetName}?api-version={api-version}

https://management.azure.com/subscriptions/2889435b-ab4f-48ca-92da-b2774524d367/resourceGroups/slingshotdns/providers/Microsoft.Network/dnszones/rockrms.church/CNAME/boogers?api-version=2015-05-04-preview

{
  "location": "global",
  "tags": {},
  "properties": {
     "TTL": 300,
     "CNAMERecord": {
         "cname": "username.rockrms.church"
     }
  }
}

## Azure CLI

Show dns zone:

~~~
azure network dns zone show slingshotdns rockrms.church
~~~

Show nameservers:

~~~
azure network dns record-set show slingshotdns rockrms.church "@" NS
~~~
