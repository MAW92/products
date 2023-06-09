function parseJSON(jsonData) {
  const parsedData=JSON.parse(jsonData);

  const features=[];
  const rarity=[];
  const cardCondition=[];

  parsedData.forEach((item) => {
    item.ItemSpecifics.NameValueList.forEach((subItem) => {
      if(subItem.Name==="Features") {
        features.push(subItem.Value);
      } else if(subItem.Name==="Rarity") {
        rarity.push(subItem.Value);
      } else if(subItem.Name==="Card Condition") {
        cardCondition.push(subItem.Value);
      }
    });
  });

  return {
    features,
    rarity,
    cardCondition,
  };
}

// Example usage
const jsonData=[
  {
    "ItemID": 354434182701,
    "EndTime": "2023-07-06T22:17:02.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Kuriboh-FL1-EN003-Limited-Secret-Rare-/354434182701",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTE0NFg4Mzc=/z/uw4AAOSwaOVj5pmE/$_57.PNG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTE0NFg4Mzc=/z/uw4AAOSwaOVj5pmE/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/XjQAAOSwaF5j5plo/$_57.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/n-EAAOSwSWpj5plo/$_57.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTExNlgxNjAw/z/axIAAOSwZKVj5plo/$_57.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTE2NFgxNjAw/z/M5oAAOSwdZhj5plo/$_57.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTE5OVgxNjAw/z/eXwAAOSwhm5j5plo/$_57.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 9.03,
    "ListingStatus": "Active",
    "TimeLeft": "P28DT22H53M37S",
    "Title": "Yugioh Kuriboh FL1-EN003 Limited Secret Rare",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": "Limited Edition"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Fiend"
        },
        {
          "Name": "Set",
          "Value": "Forbidden Legacy"
        },
        {
          "Name": "Custom Bundle",
          "Value": "No"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Rarity",
          "Value": "Secret Rare"
        },
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Character",
          "Value": "Yami Yugi"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Card Number",
          "Value": "FL1-EN003"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        },
        {
          "Name": "Card Condition",
          "Value": "Lightly Played (Excellent)"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Dark"
        },
        {
          "Name": "Card Name",
          "Value": "Kuriboh"
        },
        {
          "Name": "Card Type",
          "Value": "Effect"
        },
        {
          "Name": "Graded",
          "Value": "No"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Lightly Played condition, kept sleeved and stored in a safe environment. Has a few impression marks on the center area of card if viewed from an angle on front side, however does not show on back side of the card."
  },
  {
    "ItemID": 354434274664,
    "EndTime": "2023-07-06T23:40:28.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Double-Spell-MFC-106-1st-Edition-Ultra-Rare-Magicians-Force-/354434274664",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTI3Nlg4MjE=/z/HSkAAOSwGDBkB~WK/$_57.PNG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTI3Nlg4MjE=/z/HSkAAOSwGDBkB~WK/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMTk5/z/Y8kAAOSwYd5j8Xgl/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxNDA4/z/kBAAAOSwQ7Nj8Xd8/$_57.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMTEw/z/1tAAAOSw5n1j8Xd7/$_57.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMzg3/z/490AAOSwn5Vj8Xd8/$_57.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMTQ2/z/l00AAOSwa3Zj8Xd8/$_57.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTI4OVg5OTM=/z/3vEAAOSwQ6lj8Xff/$_57.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTI3Nlg5OTM=/z/z2sAAOSwEp9j8Xff/$_57.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 16.69,
    "ListingStatus": "Active",
    "TimeLeft": "P29DT17M3S",
    "Title": "Yugioh Double Spell MFC-106 1st Edition Ultra Rare Magician&apos;s Force",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "Magician&apos;s Force"
        },
        {
          "Name": "Character",
          "Value": "Yami Yugi"
        },
        {
          "Name": "Custom Bundle",
          "Value": "No"
        },
        {
          "Name": "Card Condition",
          "Value": "Lightly Played (Excellent)"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 1996
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "Yes"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Ultra Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Double Spell"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Card Number",
          "Value": "MFC-106"
        },
        {
          "Name": "Card Type",
          "Value": "Spell"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Very Lightly Played condition, no noticeable scratches, creases, etc. Some very light edge wear due to previous use. Kept sleeved and stored in a safe environment."
  },
  {
    "ItemID": 354434274669,
    "EndTime": "2023-07-06T23:40:28.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Painful-Choice-MRL-049-1st-Edition-Super-Rare-Magic-Ruler-/354434274669",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTUyNVgxMTU3/z/YWcAAOSwxtpkB~Tg/$_57.PNG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTUyNVgxMTU3/z/YWcAAOSwxtpkB~Tg/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/dc0AAOSwlOpi-mUo/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMTI0/z/EzQAAOSwjkpj8XZJ/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMTYw/z/zG8AAOSwONdi-mTx/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/AbcAAOSwvD9j0l1j/$_57.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/c1gAAOSweBxj0l1j/$_57.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 16.69,
    "ListingStatus": "Active",
    "TimeLeft": "P29DT17M3S",
    "Title": "Yugioh Painful Choice MRL-049 1st Edition Super Rare  Magic Ruler",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "Magic Ruler"
        },
        {
          "Name": "Character",
          "Value": "Yami Yugi"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Not Applicable"
        },
        {
          "Name": "Custom Bundle",
          "Value": "No"
        },
        {
          "Name": "Card Condition",
          "Value": "Lightly Played (Excellent)"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 1996
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "Yes"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Super Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Painful Choice"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Card Number",
          "Value": "MRL-049"
        },
        {
          "Name": "Card Type",
          "Value": "Spell"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Lightly Played condition, no noticeable scratches, creases, ect. Some very light edge wear due to previous use. Kept sleeved and stored in a safe environment."
  },
  {
    "ItemID": 354434274671,
    "EndTime": "2023-07-06T23:40:28.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Winged-Kuriboh-DR3-EN185-Unlimited-Super-Rare-NM-/354434274671",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/0asAAOSw3iti9DOn/$_12.PNG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/0asAAOSw3iti9DOn/$_12.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMjcw/z/abMAAOSwUQhi9DOk/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/0asAAOSw3iti9DOn/$_12.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMjcw/z/abMAAOSwUQhi9DOk/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 17.69,
    "ListingStatus": "Active",
    "TimeLeft": "P29DT17M3S",
    "Title": "Yugioh Winged Kuriboh DR3-EN185 Unlimited Super Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": "Unlimited"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Fairy"
        },
        {
          "Name": "Set",
          "Value": "Dark Revelation Volume 3"
        },
        {
          "Name": "Custom Bundle",
          "Value": "No"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Rarity",
          "Value": "Super Rare"
        },
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Character",
          "Value": "Yami Yugi"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Card Number",
          "Value": "DR3-EN185"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Light"
        },
        {
          "Name": "Card Name",
          "Value": "Winged Kuriboh"
        },
        {
          "Name": "Card Type",
          "Value": "Effect"
        },
        {
          "Name": "Graded",
          "Value": "No"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment."
  },
  {
    "ItemID": 354588496313,
    "EndTime": "2023-06-15T21:34:16.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Rivalry-Warlords-KICO-EN058-Rare-1st-Edition-NM-/354588496313",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/0bEAAOSw4NBjydCc/$_57.PNG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/0bEAAOSw4NBjydCc/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/TyIAAOSwSbJjydCd/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/hxEAAOSw4TZjydCd/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/k1wAAOSwaCdjydCc/$_57.PNG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 2.71,
    "ListingStatus": "Active",
    "TimeLeft": "P7DT22H10M51S",
    "Title": "Yugioh Rivalry Of Warlords KICO-EN058 Rare 1st Edition NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Set",
          "Value": "King&apos;s Court"
        },
        {
          "Name": "Custom Bundle",
          "Value": "No"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Rarity",
          "Value": "Rare"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2020
        },
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Character",
          "Value": "Yami Yugi"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Card Number",
          "Value": "KICO-EN058"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Finish",
          "Value": "Regular"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Card Name",
          "Value": "Rivalry of Warlords"
        },
        {
          "Name": "Card Type",
          "Value": "Trap-Continuous"
        },
        {
          "Name": "Graded",
          "Value": "No"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, stored in a safe environment."
  },
  {
    "ItemID": 354620966508,
    "EndTime": "2023-07-02T09:14:56.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Craneo-Convocado-Summoned-Skull-BIY-S004-1st-Edition-Common-Spanish-/354620966508",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTYwMFgxMTE3/z/O~QAAOSwQ8JkAHWf/$_57.PNG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTYwMFgxMTE3/z/O~QAAOSwQ8JkAHWf/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMTk5/z/6PQAAOSwoQhkAHTF/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/YxAAAOSwd4tkAHUD/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMTk5/z/c9oAAOSwq79kAHUO/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/IYQAAOSwfPxkAHUb/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMTE3/z/9IAAAOSwwglkAHUp/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMTk5/z/VCgAAOSw6Xlj0mIZ/$_57.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 15.69,
    "ListingStatus": "Active",
    "TimeLeft": "P24DT9H51M31S",
    "Title": "Yugioh Craneo Convocado (Summoned Skull) BIY-S004 1st Edition Common Spanish",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Fiend"
        },
        {
          "Name": "Set",
          "Value": "Starter Deck: Yugi"
        },
        {
          "Name": "Custom Bundle",
          "Value": "No"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "Yes"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Rarity",
          "Value": "Common"
        },
        {
          "Name": "Year Manufactured",
          "Value": 1996
        },
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Language",
          "Value": "Spanish"
        },
        {
          "Name": "Character",
          "Value": [
            "Yami Yugi",
            "Yugi Muto"
          ]
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Card Number",
          "Value": "BIY-S004"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Finish",
          "Value": "Regular"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Dark"
        },
        {
          "Name": "Card Name",
          "Value": "Summoned Skull"
        },
        {
          "Name": "Card Type",
          "Value": "Normal"
        },
        {
          "Name": "Graded",
          "Value": "No"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment."
  },
  {
    "ItemID": 354677972833,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Battlewasp-Pin-Bullseye-BLHR-EN031-1st-Edition-Ultra-Rare-NM-/354677972833",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTM0OFgxMDIw/z/7yEAAOSwF81kIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTM0OFgxMDIw/z/7yEAAOSwF81kIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/B28AAOSwjJxkIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 3.74,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H36M5S",
    "Title": "Yugioh Battlewasp - Pin the Bullseye BLHR-EN031 1st Edition Ultra Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Wind"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "Battles of Legend: Hero&apos;s Revenge"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Insect"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2021
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Ultra Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Battlewasp - Pin the Bullseye"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Card Number",
          "Value": "BLHR-EN031"
        },
        {
          "Name": "Card Type",
          "Value": "Effect"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972834,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Red-Dragon-Archfiend-CT07-EN025-Limited-Edition-Super-Rare-NM-/354677972834",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTI5MFg5NjM=/z/nS0AAOSw~9ZkIhHE/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTI5MFg5NjM=/z/nS0AAOSw~9ZkIhHE/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/TFoAAOSw2QBkIhHD/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 7.79,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H36M5S",
    "Title": "Yugioh Red Dragon Archfiend CT07-EN025 Limited Edition Super Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": "Limited Edition"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Dragon"
        },
        {
          "Name": "Set",
          "Value": "2010 Collector&amp;#39;s Tin"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Rarity",
          "Value": "Super Rare"
        },
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Card Number",
          "Value": "CT07-EN025"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Dark"
        },
        {
          "Name": "Card Name",
          "Value": "Red Dragon Archfiend"
        },
        {
          "Name": "Card Type",
          "Value": "Synchro/Effect Monster"
        },
        {
          "Name": "Graded",
          "Value": "No"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972835,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Zaborg-Mega-Monarch-NECH-EN037-1st-Edition-Ultra-Rare-NM-/354677972835",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTI2M1g5MzY=/z/bk0AAOSwngpkIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTI2M1g5MzY=/z/bk0AAOSwngpkIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/1yQAAOSwzhhkIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 3.85,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H36M5S",
    "Title": "Yugioh Zaborg the Mega Monarch NECH-EN037 1st Edition Ultra Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Thunder"
        },
        {
          "Name": "Set",
          "Value": "The New Challengers"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Rarity",
          "Value": "Ultra Rare"
        },
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Card Number",
          "Value": "NECH-EN037"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Light"
        },
        {
          "Name": "Card Name",
          "Value": "Zaborg the Mega Monarch"
        },
        {
          "Name": "Card Type",
          "Value": "Effect"
        },
        {
          "Name": "Graded",
          "Value": "No"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972838,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Yuki-Musume-Ice-Mayakashi-SAST-ENSE2-Limited-Edition-Super-Rare-NM-/354677972838",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTI5Nlg5NDU=/z/zuEAAOSwbE9kIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTI5Nlg5NDU=/z/zuEAAOSwbE9kIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/h5wAAOSwWMVkIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 3.69,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H36M5S",
    "Title": "Yugioh Yuki-Musume, the Ice Mayakashi SAST-ENSE2 Limited Edition Super Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": "Limited Edition"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Zombie"
        },
        {
          "Name": "Set",
          "Value": "Savage Strike Special Edition"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Rarity",
          "Value": "Super Rare"
        },
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Card Number",
          "Value": "SAST-ENSE2"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Water"
        },
        {
          "Name": "Card Name",
          "Value": "Yuki-Musume, the Ice Mayakashi"
        },
        {
          "Name": "Card Type",
          "Value": "Effect"
        },
        {
          "Name": "Graded",
          "Value": "No"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972839,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Generaider-Boss-Fight-MYFI-EN037-1st-Edition-Super-Rare-NM-/354677972839",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTMwMlg5Mzc=/z/A6gAAOSwmCVkIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTMwMlg5Mzc=/z/A6gAAOSwmCVkIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/~EQAAOSwwohkIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 3.51,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H36M5S",
    "Title": "Yugioh Generaider Boss Fight MYFI-EN037 1st Edition Super Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Set",
          "Value": "Mystic Fighters"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Rarity",
          "Value": "Super Rare"
        },
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Card Number",
          "Value": "MYFI-EN037"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Card Name",
          "Value": "Generaider Boss Fight"
        },
        {
          "Name": "Graded",
          "Value": "No"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972840,
    "EndTime": "2023-06-06T06:41:39.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Spellbook-Magician-Prophecy-BLLR-EN050-1st-Edition-Ultra-Rare-NM-/354677972840",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTI2NFg5MzE=/z/mCoAAOSw3GZkIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTI2NFg5MzE=/z/mCoAAOSw3GZkIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/drYAAOSwr31kIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 3.02,
    "ListingStatus": "Completed",
    "TimeLeft": "PT0S",
    "Title": "Yugioh Spellbook Magician of Prophecy BLLR-EN050 1st Edition Ultra Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Water"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "Battles of Legend: Light&apos;s Revenge"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Spellcaster"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2018
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Ultra Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Spellbook Magician of Prophecy"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Card Number",
          "Value": "BLLR-EN050"
        },
        {
          "Name": "Card Type",
          "Value": "Effect"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972843,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Skull-Archfiend-Lightning-BP01-EN006-1st-Edition-Starfoil-Rare-LP-/354677972843",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTM0OVg5NjY=/z/QREAAOSwtmJkIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTM0OVg5NjY=/z/QREAAOSwtmJkIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/Gh4AAOSwk1RkIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 4.2,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H36M5S",
    "Title": "Yugioh Skull Archfiend of Lightning BP01-EN006 1st Edition Starfoil Rare LP",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Dark"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "Battle Pack: Epic Dawn"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Fiend"
        },
        {
          "Name": "Card Condition",
          "Value": "Lightly Played (Excellent)"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Starfoil Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Skull Archfiend of Lightning"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Card Number",
          "Value": "BP01-EN006"
        },
        {
          "Name": "Card Type",
          "Value": "Effect"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Lightly Played condition slight edgewear on left-hand side of card, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972844,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Phoenix-Wing-Wind-Blast-PGLD-EN070-1st-Edition-Gold-Rare-NM-/354677972844",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTMxM1g5NTI=/z/zwgAAOSwlpNkIhHG/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTMxM1g5NTI=/z/zwgAAOSwlpNkIhHG/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/KaoAAOSwLulkIhHF/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 3.43,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H36M5S",
    "Title": "Yugioh Phoenix Wing Wind Blast PGLD-EN070 1st Edition Gold Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "Premium Gold"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2015
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Gold Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Phoenix Wing Wind Blast"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Card Number",
          "Value": "PGLD-EN070"
        },
        {
          "Name": "Card Type",
          "Value": "Trap"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972845,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Accel-Synchron-SDSE-EN042-1st-Edition-Super-Rare-NM-/354677972845",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTM3Nlg5NzI=/z/yj8AAOSwq9BkIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTM3Nlg5NzI=/z/yj8AAOSwq9BkIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/RlQAAOSw-N5kIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 2.85,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H36M5S",
    "Title": "Yugioh Accel Synchron SDSE-EN042 1st Edition Super Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Dark"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "- Yusei -"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Machine"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2015
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Super Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Accel Synchron"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Card Number",
          "Value": "SDSE-EN042"
        },
        {
          "Name": "Card Type",
          "Value": "Synchro/Effect Monster"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972845,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Accel-Synchron-SDSE-EN042-1st-Edition-Super-Rare-NM-/354677972845",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTM3Nlg5NzI=/z/yj8AAOSwq9BkIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTM3Nlg5NzI=/z/yj8AAOSwq9BkIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/RlQAAOSw-N5kIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 2.85,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H32M10S",
    "Title": "Yugioh Accel Synchron SDSE-EN042 1st Edition Super Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Dark"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "- Yusei -"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Machine"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2015
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Super Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Accel Synchron"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Card Number",
          "Value": "SDSE-EN042"
        },
        {
          "Name": "Card Type",
          "Value": "Synchro/Effect Monster"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972846,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Theinen-Great-Sphinx-EP1-EN001-Unlimited-Edition-Ultra-Rare-NM-/354677972846",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTMwMlg5NTg=/z/zQkAAOSwqAFkIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTMwMlg5NTg=/z/zQkAAOSwqAFkIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/NE4AAOSwyINkIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 3.75,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H32M10S",
    "Title": "Yugioh Theinen the Great Sphinx EP1-EN001 Unlimited Edition Ultra Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": [
            "Unlimited",
            "Promo"
          ]
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Beast"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Rarity",
          "Value": "Ultra Rare"
        },
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Card Number",
          "Value": "EP1-EN001"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Light"
        },
        {
          "Name": "Card Name",
          "Value": "Theinen the Great Sphinx"
        },
        {
          "Name": "Card Type",
          "Value": "Effect"
        },
        {
          "Name": "Graded",
          "Value": "No"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972848,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Gladiator-Beast-Gyzarus-LODT-EN044-Unlimited-Edition-Super-Rare-NM-/354677972848",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTM2MFg5ODY=/z/rxkAAOSw-lZkIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTM2MFg5ODY=/z/rxkAAOSw-lZkIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/NRwAAOSw0XVkIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 4.75,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H32M10S",
    "Title": "Yugioh Gladiator Beast Gyzarus LODT-EN044 Unlimited Edition Super Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Earth"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "Light of Destruction"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Winged Beast"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2008
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Super Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Gladiator Beast Gyzarus"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "Unlimited"
        },
        {
          "Name": "Card Number",
          "Value": "LODT-EN044"
        },
        {
          "Name": "Card Type",
          "Value": "Fusion/Effect Monster"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972849,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Thunder-Dragonhawk-MP19-EN168-1st-Edition-Prismatic-Secret-Rare-NM-/354677972849",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTMzOVg5NjY=/z/~IgAAOSwKcVkIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTMzOVg5NjY=/z/~IgAAOSwKcVkIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/hFIAAOSw2ApkIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 5.21,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H32M10S",
    "Title": "Yugioh Thunder Dragonhawk MP19-EN168 1st Edition Prismatic Secret Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Light"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "2019 Gold Sarcophagus Tin Mega Pack"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Thunder"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2019
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Prismatic Secret Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Thunder Dragonhawk"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Card Number",
          "Value": "MP19-EN168"
        },
        {
          "Name": "Card Type",
          "Value": "Effect"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972852,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Smashing-Ground-PGL2-EN075-Limited-Edition-Gold-Rare-NM-/354677972852",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTI4MVg5NzM=/z/nroAAOSwnD5kIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTI4MVg5NzM=/z/nroAAOSwnD5kIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/z8wAAOSwjYlkIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 4.34,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H32M10S",
    "Title": "Yugioh Smashing Ground PGL2-EN075 Limited Edition Gold Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": "Limited Edition"
        },
        {
          "Name": "Set",
          "Value": "Premium Gold 2"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Rarity",
          "Value": "Gold Rare"
        },
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Card Number",
          "Value": "PGL2-EN075"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Card Name",
          "Value": "Smashing Ground"
        },
        {
          "Name": "Card Type",
          "Value": "Spell"
        },
        {
          "Name": "Graded",
          "Value": "No"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972854,
    "EndTime": "2023-06-01T20:44:36.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Zoodiac-Boarbow-OP15-EN005-Unlimited-Edition-Super-Rare-NM-/354677972854",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTM0N1gxMDA0/z/EhcAAOSw20NkIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTM0N1gxMDA0/z/EhcAAOSw20NkIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/LiIAAOSwp3JkIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 3.9,
    "ListingStatus": "Completed",
    "TimeLeft": "PT0S",
    "Title": "Yugioh Zoodiac Boarbow OP15-EN005 Unlimited Edition Super Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Earth"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "OTS Tournament Pack 15"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Beast-Warrior"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2015
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Super Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Zoodiac Boarbow"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "Unlimited"
        },
        {
          "Name": "Card Number",
          "Value": "OP15-EN005"
        },
        {
          "Name": "Card Type",
          "Value": "Xyz/Effect Monster"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972855,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Volcanic-Doomfire-CT04-EN004-Limited-Edition-Secret-Rare-/354677972855",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTI5MVg5NTc=/z/q9YAAOSwv81kIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTI5MVg5NTc=/z/q9YAAOSwv81kIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/6vEAAOSw0l5kIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 5.69,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H32M10S",
    "Title": "Yugioh Volcanic Doomfire CT04-EN004 Limited Edition Secret Rare",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Fire"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "- Yugi -"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Pyro"
        },
        {
          "Name": "Card Condition",
          "Value": "Lightly Played (Excellent)"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2007
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Secret Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Volcanic Doomfire"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "Limited Edition"
        },
        {
          "Name": "Card Number",
          "Value": "CT04-EN004"
        },
        {
          "Name": "Card Type",
          "Value": "Effect"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Very Lightly Played condition, slight corner wear, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972856,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Crusadia-Arboria-MP19-EN078-1st-Edition-Super-Rare-NM-/354677972856",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/fhYAAOSw-xlkKG~n/$_57.PNG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/fhYAAOSw-xlkKG~n/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/2iUAAOSwzNNkKHAk/$_57.PNG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 3.85,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H32M10S",
    "Title": "Yugioh Crusadia Arboria MP19-EN078 1st Edition Super Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Warrior"
        },
        {
          "Name": "Set",
          "Value": "2019 Gold Sarcophagus Tin Mega Pack"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Rarity",
          "Value": "Super Rare"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2019
        },
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Card Number",
          "Value": "MP19-EN078"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Water"
        },
        {
          "Name": "Card Name",
          "Value": "Crusadia Arboria"
        },
        {
          "Name": "Card Type",
          "Value": "Effect"
        },
        {
          "Name": "Graded",
          "Value": "No"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972857,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Krystal-Dragon-MVP1-ENSV2-Limited-Edition-Ultra-Rare-NM-/354677972857",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTI5M1g5MzY=/z/lkUAAOSwFwZkIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTI5M1g5MzY=/z/lkUAAOSwFwZkIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/KJMAAOSwRQ1kIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 4.62,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H32M10S",
    "Title": "Yugioh Krystal Dragon MVP1-ENSV2 Limited Edition Ultra Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": "Limited Edition"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Dragon"
        },
        {
          "Name": "Set",
          "Value": "- Yugi -"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Rarity",
          "Value": "Ultra Rare"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2020
        },
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Card Number",
          "Value": "MVP1-ENSV2"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Light"
        },
        {
          "Name": "Card Name",
          "Value": "Krystal Dragon"
        },
        {
          "Name": "Card Type",
          "Value": "Effect"
        },
        {
          "Name": "Graded",
          "Value": "No"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972858,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Live-Twin-Sunnys-Snitch-DAMA-EN062-1st-Edition-Super-Rare-NM-/354677972858",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTI2N1g5NTM=/z/lHMAAOSw0PdkIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTI2N1g5NTM=/z/lHMAAOSw0PdkIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/bIIAAOSwvGVkIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 2.69,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H32M10S",
    "Title": "Yugioh Live Twin Sunny&apos;s Snitch DAMA-EN062 1st Edition Super Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "Dawn of Majesty"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 1996
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Super Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Live Twin Sunnys Snitch"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Card Number",
          "Value": "DAMA-EN062"
        },
        {
          "Name": "Card Type",
          "Value": "Spell-Continuous"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354677972859,
    "EndTime": "2023-06-27T21:59:30.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-Tri-Brigade-Airborne-Assault-PHRA-EN053-1st-Edition-Secret-Rare-NM-/354677972859",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTMyNVg5NjY=/z/sOgAAOSwtQFkIhHF/$_1.JPG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTMyNVg5NjY=/z/sOgAAOSwtQFkIhHF/$_1.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjMwWDUwMA==/z/AfEAAOSwxcFkIhHE/$_1.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 5.88,
    "ListingStatus": "Active",
    "TimeLeft": "P19DT22H32M10S",
    "Title": "Yugioh Tri-Brigade Airborne Assault PHRA-EN053 1st Edition Secret Rare NM",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "Phantom Rage"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Card Condition",
          "Value": "Near Mint or Better"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2020
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Graded",
          "Value": "No"
        },
        {
          "Name": "Rarity",
          "Value": "Secret Rare"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Card Name",
          "Value": "Tri-Brigade Airborne Assault"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Card Number",
          "Value": "PHRA-EN053"
        },
        {
          "Name": "Card Type",
          "Value": "Spell-Quick Play"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Near Mint condition, kept sleeved and stored in a safe environment!"
  },
  {
    "ItemID": 354774133306,
    "EndTime": "2023-06-10T02:05:12.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Mistys-Tentacruel-Pokemon-73-Gym-Heroes-Japanese-Holo-Swirl-Missing-Rarity-/354774133306",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTA3NVg3NzQ=/z/EvMAAOSwv1ZkAvT-/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTE1MFg3NzQ=/z/negAAOSwZuVj0pem/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTEwN1g4MTA=/z/7nsAAOSwUlBkAvOA/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTA3M1g4NDY=/z/oGMAAOSwbRxj0pdh/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTU5OVgxNTk5/z/AvcAAOSwt2tj0peH/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTU5OVgxNTk5/z/mGsAAOSwgcxj0peG/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NjA5WDUwOQ==/z/FCkAAOSw7YxkAvTh/$_57.PNG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183454,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Individual Cards",
    "BidCount": 0,
    "ConvertedCurrentPrice": 18.69,
    "ListingStatus": "Active",
    "TimeLeft": "P2DT2H37M52S",
    "Title": "Misty&apos;s Tentacruel Pokemon #73 Gym Heroes Japanese Holo Swirl Missing Rarity",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": "1st Edition"
        },
        {
          "Name": "Creature/Monster Type",
          "Value": "Aqua"
        },
        {
          "Name": "Set",
          "Value": "Gym Heroes"
        },
        {
          "Name": "Custom Bundle",
          "Value": "No"
        },
        {
          "Name": "Age Level",
          "Value": "4+"
        },
        {
          "Name": "Illustrator",
          "Value": "Ken Sugimori"
        },
        {
          "Name": "Vintage",
          "Value": "Yes"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "Japan"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Rarity",
          "Value": "Holo Rare"
        },
        {
          "Name": "HP",
          "Value": 70
        },
        {
          "Name": "Attack/Power",
          "Value": 30
        },
        {
          "Name": "Year Manufactured",
          "Value": 1998
        },
        {
          "Name": "Card Size",
          "Value": "Japanese"
        },
        {
          "Name": "Language",
          "Value": "Japanese"
        },
        {
          "Name": "Character",
          "Value": "Tentacruel"
        },
        {
          "Name": "Game",
          "Value": "Pokémon TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "Nintendo"
        },
        {
          "Name": "Card Number",
          "Value": 73
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        },
        {
          "Name": "Stage",
          "Value": "Stage 2"
        },
        {
          "Name": "Card Condition",
          "Value": "Lightly Played (Excellent)"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": "Water"
        },
        {
          "Name": "Card Name",
          "Value": "Misty&apos;s Tentacruel"
        },
        {
          "Name": "Card Type",
          "Value": "Pokémon"
        },
        {
          "Name": "Graded",
          "Value": "No"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Lightly Played condition, light edgewear, no creases or damage, kept sleeved and stored in a safe environment."
  },
  {
    "ItemID": 354788151309,
    "BuyItNowAvailable": true,
    "ConvertedBuyItNowPrice": 19.69,
    "EndTime": "2023-05-21T05:06:17.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-25-Card-Lot-Holo-Only-No-Commons-Lot-5-/354788151309",
    "ListingType": "Chinese",
    "Location": "Portland, Oregon",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTYwMFgxMDEx/z/2sQAAOSwlyJkOYI3/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/OTg4WDE2MDA=/z/iWoAAOSwF3RkOYI~/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/OTIyWDE2MDA=/z/OUUAAOSwa5tkOYJA/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NTc3WDE2MDA=/z/fdIAAOSwxdxkOYJE/$_57.PNG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183455,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Mixed Card Lots",
    "BidCount": 0,
    "ConvertedCurrentPrice": 8.69,
    "ListingStatus": "Completed",
    "TimeLeft": "PT0S",
    "Title": "Yugioh 25 Card Lot Holo Only No Commons Lot 5",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": [
            "Dark",
            "Light"
          ]
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "- Yugi -"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Signed By",
          "Value": "United States"
        },
        {
          "Name": "Number of Cards",
          "Value": 25
        },
        {
          "Name": "Card Condition",
          "Value": "Excellent"
        },
        {
          "Name": "Year Manufactured",
          "Value": 1996
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "Yes"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": [
            "1st Edition",
            "Limited Edition",
            "Unlimited"
          ]
        },
        {
          "Name": "Card Type",
          "Value": [
            "Effect",
            "Spell",
            "Trap"
          ]
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Assorted lot of 25 Near Mint Yugioh! cards, ranging from Super Rare on up. Cards are basically pack fresh, kept sleeved and stored in a safe environment."
  },
  {
    "ItemID": 354788151310,
    "BuyItNowAvailable": true,
    "ConvertedBuyItNowPrice": 19.69,
    "EndTime": "2023-05-21T05:06:17.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-25-Card-Lot-Holo-Only-No-Commons-Lot-6-/354788151310",
    "ListingType": "Chinese",
    "Location": "Portland, Oregon",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTYwMFg5NzM=/z/x-cAAOSwcvNkOYKI/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/OTQ5WDE2MDA=/z/j9sAAOSwurtkOYKL/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/OTI2WDE2MDA=/z/60UAAOSwaMpkOYKQ/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NTA3WDE2MDA=/z/o~kAAOSwzHxkOYKU/$_57.PNG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183455,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Mixed Card Lots",
    "BidCount": 0,
    "ConvertedCurrentPrice": 8.69,
    "ListingStatus": "Completed",
    "TimeLeft": "PT0S",
    "Title": "Yugioh 25 Card Lot Holo Only No Commons Lot 6",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": [
            "Dark",
            "Light"
          ]
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "- Yugi -"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Signed By",
          "Value": "United States"
        },
        {
          "Name": "Number of Cards",
          "Value": 25
        },
        {
          "Name": "Card Condition",
          "Value": "Excellent"
        },
        {
          "Name": "Year Manufactured",
          "Value": 1996
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "Yes"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": [
            "1st Edition",
            "Limited Edition",
            "Unlimited"
          ]
        },
        {
          "Name": "Card Type",
          "Value": [
            "Effect",
            "Spell",
            "Trap"
          ]
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Assorted lot of 25 Near Mint Yugioh! cards, ranging from Super Rare on up. Cards are basically pack fresh, kept sleeved and stored in a safe environment."
  },
  {
    "ItemID": 354788151311,
    "BuyItNowAvailable": true,
    "ConvertedBuyItNowPrice": 19.69,
    "EndTime": "2023-05-21T05:06:17.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-25-Card-Lot-Holo-Only-No-Commons-Lot-3-/354788151311",
    "ListingType": "Chinese",
    "Location": "Portland, Oregon",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTU5OVgxMjQ1/z/euMAAOSwxvVkOJtD/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTI0NVgxNjAw/z/~0UAAOSw5ANkOJtP/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/ODYyWDE2MDA=/z/ul8AAOSw4-tkOJtR/$_57.PNG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183455,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Mixed Card Lots",
    "BidCount": 0,
    "ConvertedCurrentPrice": 8.69,
    "ListingStatus": "Completed",
    "TimeLeft": "PT0S",
    "Title": "Yugioh 25 Card Lot Holo Only No Commons Lot 3",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": [
            "Dark",
            "Light"
          ]
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "- Yugi -"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Signed By",
          "Value": "United States"
        },
        {
          "Name": "Number of Cards",
          "Value": 25
        },
        {
          "Name": "Card Condition",
          "Value": "Excellent"
        },
        {
          "Name": "Year Manufactured",
          "Value": 1996
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "Yes"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": [
            "1st Edition",
            "Limited Edition",
            "Unlimited"
          ]
        },
        {
          "Name": "Card Type",
          "Value": [
            "Effect",
            "Spell",
            "Trap"
          ]
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Assorted lot of 25 Near Mint Yugioh! cards, ranging from Super Rare on up. Cards are basically pack fresh, kept sleeved and stored in a safe environment."
  },
  {
    "ItemID": 354788151312,
    "BuyItNowAvailable": true,
    "ConvertedBuyItNowPrice": 19.69,
    "EndTime": "2023-05-21T05:06:17.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-25-Card-Lot-Holo-Only-No-Commons-Lot-2-/354788151312",
    "ListingType": "Chinese",
    "Location": "Portland, Oregon",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTYwMFgxMTIw/z/p1IAAOSwl-1kOJkY/$_57.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/OTI4WDE1OTk=/z/nNkAAOSwYyZkOJcj/$_57.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/ODk2WDE2MDA=/z/uVYAAOSwncFkOJcj/$_57.JPG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NTAyWDE2MDA=/z/tqgAAOSwSx9kOJcj/$_57.JPG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183455,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Mixed Card Lots",
    "BidCount": 0,
    "ConvertedCurrentPrice": 8.69,
    "ListingStatus": "Completed",
    "TimeLeft": "PT0S",
    "Title": "Yugioh 25 Card Lot Holo Only No Commons Lot 2",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": [
            "Dark",
            "Light"
          ]
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "- Yugi -"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Signed By",
          "Value": "United States"
        },
        {
          "Name": "Number of Cards",
          "Value": 25
        },
        {
          "Name": "Card Condition",
          "Value": "Excellent"
        },
        {
          "Name": "Year Manufactured",
          "Value": 1996
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "Yes"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": [
            "1st Edition",
            "Limited Edition",
            "Unlimited"
          ]
        },
        {
          "Name": "Card Type",
          "Value": [
            "Effect",
            "Spell",
            "Trap"
          ]
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Assorted lot of 25 Near Mint Yugioh! cards, ranging from Super Rare on up. Cards are basically pack fresh, kept sleeved and stored in a safe environment."
  },
  {
    "ItemID": 354788151313,
    "BuyItNowAvailable": true,
    "ConvertedBuyItNowPrice": 19.69,
    "EndTime": "2023-05-21T05:06:17.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/Yugioh-25-Card-Lot-Holo-Only-No-Commons-Lot-4-/354788151313",
    "ListingType": "Chinese",
    "Location": "Portland, Oregon",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTYwMFg5ODY=/z/APsAAOSwE~5kOYHq/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/OTU2WDE2MDA=/z/nJUAAOSwUvNkOYHv/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/OTQxWDE2MDA=/z/9PYAAOSwj3NkOYH1/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/NTM2WDE2MDA=/z/IMIAAOSwOaJkOYH2/$_57.PNG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183455,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Mixed Card Lots",
    "BidCount": 0,
    "ConvertedCurrentPrice": 8.69,
    "ListingStatus": "Completed",
    "TimeLeft": "PT0S",
    "Title": "Yugioh 25 Card Lot Holo Only No Commons Lot 4",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Attribute/MTG:Color",
          "Value": [
            "Dark",
            "Light"
          ]
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Set",
          "Value": "- Yugi -"
        },
        {
          "Name": "Character",
          "Value": "Yugi Muto"
        },
        {
          "Name": "Signed By",
          "Value": "United States"
        },
        {
          "Name": "Number of Cards",
          "Value": 25
        },
        {
          "Name": "Card Condition",
          "Value": "Excellent"
        },
        {
          "Name": "Year Manufactured",
          "Value": 1996
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Age Level",
          "Value": "6+"
        },
        {
          "Name": "Vintage",
          "Value": "Yes"
        },
        {
          "Name": "Game",
          "Value": "Yu-Gi-Oh! TCG"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Manufacturer",
          "Value": "Konami"
        },
        {
          "Name": "Features",
          "Value": [
            "1st Edition",
            "Limited Edition",
            "Unlimited"
          ]
        },
        {
          "Name": "Card Type",
          "Value": [
            "Effect",
            "Spell",
            "Trap"
          ]
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Finish",
          "Value": "Holo"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 3000,
    "ConditionDisplayName": "Used",
    "ConditionDescription": "Assorted lot of 25 Near Mint Yugioh! cards, ranging from Super Rare on up. Cards are basically pack fresh, kept sleeved and stored in a safe environment."
  },
  {
    "ItemID": 354618440477,
    "EndTime": "2023-07-01T08:41:45.000Z",
    "ViewItemURLForNaturalSearch": "https://www.ebay.com/itm/2021-Pokemon-25th-Anniversary-McDonald-s-Booster-Pack-McDonalds-New-Sealed-/354618440477",
    "ListingType": "FixedPriceItem",
    "Location": "Portland, Oregon",
    "GalleryURL": "https://i.ebayimg.com/00/s/MTYwMFgxMTk5/z/-20AAOSwp5xj8g9~/$_57.PNG?set_id=880000500F",
    "PictureURL": [
      "https://i.ebayimg.com/00/s/MTYwMFgxMTk5/z/-20AAOSwp5xj8g9~/$_57.PNG?set_id=880000500F",
      "https://i.ebayimg.com/00/s/MTYwMFgxMzA4/z/Lc4AAOSwMAxj8g-H/$_57.PNG?set_id=880000500F"
    ],
    "PrimaryCategoryID": 183456,
    "PrimaryCategoryName": "Toys &amp; Hobbies:Collectible Card Games:CCG Sealed Packs",
    "BidCount": 0,
    "ConvertedCurrentPrice": 10.01,
    "ListingStatus": "Active",
    "TimeLeft": "P23DT9H14M25S",
    "Title": "2021 Pokemon 25th Anniversary McDonald's Booster Pack McDonalds New Sealed",
    "ItemSpecifics": {
      "NameValueList": [
        {
          "Name": "Features",
          "Value": "Booster"
        },
        {
          "Name": "Set",
          "Value": "Anniversary Pack"
        },
        {
          "Name": "Number of Cards",
          "Value": 4
        },
        {
          "Name": "Age Level",
          "Value": "4+"
        },
        {
          "Name": "Number of Packs",
          "Value": 1
        },
        {
          "Name": "Configuration",
          "Value": "Pack"
        },
        {
          "Name": "Vintage",
          "Value": "No"
        },
        {
          "Name": "Country/Region of Manufacture",
          "Value": "United States"
        },
        {
          "Name": "Material",
          "Value": "Card Stock"
        },
        {
          "Name": "Year Manufactured",
          "Value": 2021
        },
        {
          "Name": "Card Size",
          "Value": "Standard"
        },
        {
          "Name": "Language",
          "Value": "English"
        },
        {
          "Name": "Character",
          "Value": [
            "Bulbasaur",
            "Pikachu",
            "Squirtle"
          ]
        },
        {
          "Name": "Game",
          "Value": "Pokémon TCG"
        },
        {
          "Name": "Manufacturer",
          "Value": "McDonald&apos;s"
        },
        {
          "Name": "Autographed",
          "Value": "No"
        },
        {
          "Name": "Convention/Event",
          "Value": "Pokémon 25th Anniversary"
        }
      ]
    },
    "Country": "US",
    "AutoPay": true,
    "ConditionID": 1000,
    "ConditionDisplayName": "New/Factory Sealed"
  }
];
// Extract all the unique options for rarity, condition, and feature from the JSON data
const uniqueRarities=[...new Set(jsonData.map((item) => item.ItemSpecifics.NameValueList.find((spec) => spec.Name==="Rarity")))];
const uniqueConditions=[...new Set(jsonData.map((item) => item.ConditionDescription))];
const uniqueFeatures=[...new Set(jsonData.map((item) => item.ItemSpecifics.NameValueList.find((spec) => spec.Name==="Features")))];

// Define the desired values for filtering as all the unique options
const desiredRarities=uniqueRarities;
const desiredConditions=uniqueConditions;
const desiredFeatures=uniqueFeatures;

// Filter the items based on the desired values
const filteredItems=jsonData.filter((item) => {
  const itemRarity=item.ItemSpecifics.NameValueList.find((spec) => spec.Name==="Rarity");
  const itemCondition=item.ConditionDescription;
  const itemFeature=item.ItemSpecifics.NameValueList.find((spec) => spec.Name==="Features");

  return (
    (desiredRarities.length===0||desiredRarities.includes(itemRarity))&&
    (desiredConditions.length===0||desiredConditions.includes(itemCondition))&&
    (desiredFeatures.length===0||desiredFeatures.includes(itemFeature))
  );
});

// Function to initialize Isotope and display the filters
function initializeIsotope() {
  // Initialize Isotope with your container selector
  const $grid=$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  // Create the filter buttons
  const $filters=$('.filters');

  // Function to filter the items when a filter button is clicked
  function filterItems() {
    const rarity=$(this).data('rarity');
    const condition=$(this).data('condition');
    const feature=$(this).data('feature');

    // Update the desired values based on the clicked filter
    if(rarity) {
      const index=desiredRarities.indexOf(rarity);
      if(index>-1) {
        desiredRarities.splice(index,1);
      } else {
        desiredRarities.push(rarity);
      }
    }

    if(condition) {
      const index=desiredConditions.indexOf(condition);
      if(index>-1) {
        desiredConditions.splice(index,1);
      } else {
        desiredConditions.push(condition);
      }
    }

    if(feature) {
      const index=desiredFeatures.indexOf(feature);
      if(index>-1) {
        desiredFeatures.splice(index,1);
      } else {
        desiredFeatures.push(feature);
      }
    }

    // Filter the items based on the updated desired values
    const filteredItems=jsonData.filter((item) => {
      const itemRarity=item.ItemSpecifics.NameValueList.find((spec) => spec.Name==="Rarity");
      const itemCondition=item.ConditionDescription;
      const itemFeature=item.ItemSpecifics.NameValueList.find((spec) => spec.Name==="Features");

      return (
        (desiredRarities.length===0||desiredRarities.includes(itemRarity))&&
        (desiredConditions.length===0||desiredConditions.includes(itemCondition))&&
        (desiredFeatures.length===0||desiredFeatures.includes(itemFeature))
      );
    });

    // Update the Isotope layout with the filtered items
    $grid.isotope({ filter: filteredItems.map((item) => `.grid-item[data-id="${item.id}"]`).join(', ') });
  }

  // Bind the filter buttons click event to the filterItems function
  $filters.on('click','button',filterItems);

  // Display the filter buttons based on the unique options
  uniqueRarities.forEach((rarity) => $filters.find('.rarity').append(`<button data-rarity="${rarity}">${rarity}</button>`));
  uniqueConditions.forEach((condition) => $filters.find('.condition').append(`<button data-condition="${condition}">${condition}</button>`));
  uniqueFeatures.forEach((feature) => $filters.find('.feature').append(`<button data-feature="${feature}">${feature}</button>`));
}

// Call the initializeIsotope function when the page is ready
$(document).ready(initializeIsotope);
