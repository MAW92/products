  await getProducts();

async function getProducts() {
  const IAF_TOKEN = "v^1.1#i^1#I^3#p^3#r^0#f^0#t^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";

  const endpointUrl = "https://api.ebay.com/ws/api.dll";

  const requestData = `<?xml version="1.0" encoding="utf-8"?>
  <GetMyeBaySellingRequest xmlns="urn:ebay:apis:eBLBaseComponents">
    <ErrorLanguage>en_US</ErrorLanguage>
    <WarningLevel>High</WarningLevel>
    <DetailLevel>ReturnAll</DetailLevel>
    <ActiveList>
      <Sort>TimeLeft</Sort>
      <Pagination>
        <EntriesPerPage>200</EntriesPerPage>
        <PageNumber>1</PageNumber>
      </Pagination>
    </ActiveList>
  </GetMyeBaySellingRequest>`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "text/xml",
      "X-EBAY-API-SITEID": "0",
      "X-EBAY-API-COMPATIBILITY-LEVEL": "967",
      "X-EBAY-API-CALL-NAME": "GetMyeBaySelling",
      "X-EBAY-API-IAF-TOKEN": "v^1 1#i^1#I^3#p^3#r^0#f^0#t^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"
    },
    body: requestData
  };

  fetch(endpointUrl, requestOptions)
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));


  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const url = 'https://api.ebay.com/ws/api.dll';

  const data = `<?xml version="1.0" encoding="utf-8"?>
<GetMyeBaySellingRequest xmlns="urn:ebay:apis:eBLBaseComponents">    
	<ErrorLanguage>en_US</ErrorLanguage>
	<WarningLevel>High</WarningLevel>
	 <DetailLevel>ReturnAll</DetailLevel>
  <ActiveList>
    <Sort>TimeLeft</Sort>
    <Pagination>
      <EntriesPerPage>200</EntriesPerPage>
      <PageNumber>1</PageNumber>
    </Pagination>
  </ActiveList>
</GetMyeBaySellingRequest>`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'X-EBAY-API-SITEID': '0',
      'X-EBAY-API-COMPATIBILITY-LEVEL': '967',
      'X-EBAY-API-CALL-NAME': 'GetMyeBaySelling',
      'X-EBAY-API-IAF-TOKEN': 'v^1.1#i^1#I^3#p^3#r^0#f^0#t^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',
      'Content-Type': 'application/xml',
    },
    body: data,
  });

  const text = await response.text();

  console.log(text);
}
