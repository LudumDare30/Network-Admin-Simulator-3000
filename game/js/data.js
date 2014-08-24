/*this file contains default data and structures for the game */

/* country code and initial resources */
var gameCountryCodes = [
  "AF",
  "AL",
  "DZ",
  "AO",
  "AG",
  "AR",
  "AM",
  "AU",
  "AT",
  "AZ",
  "BS",
  "BH",
  "BD",
  "BB",
  "BY",
  "BE",
  "BZ",
  "BJ",
  "BT",
  "BO",
  "BA",
  "BW",
  "BR",
  "BN",
  "BG",
  "BF",
  "BI",
  "KH",
  "CM",
  "CA",
  "CV",
  "CF",
  "TD",
  "CL",
  "CN",
  "CO",
  "KM",
  "CD",
  "CG",
  "CR",
  "CI",
  "HR",
  "CY",
  "CZ",
  "DK",
  "DJ",
  "DM",
  "DO",
  "EC",
  "EG",
  "SV",
  "GQ",
  "ER",
  "EE",
  "ET",
  "FJ",
  "FI",
  "FR",
  "GA",
  "GM",
  "GE",
  "DE",
  "GH",
  "GR",
  "GD",
  "GT",
  "GN",
  "GW",
  "GY",
  "HT",
  "HN",
  "HK",
  "HU",
  "IS",
  "IN",
  "ID",
  "IR",
  "IQ",
  "IE",
  "IL",
  "IT",
  "JM",
  "JP",
  "JO",
  "KZ",
  "KE",
  "KI",
  "KR",
  "UNDEFINED",
  "KW",
  "KG",
  "LA",
  "LV",
  "LB",
  "LS",
  "LR",
  "LY",
  "LT",
  "LU",
  "MK",
  "MG",
  "MW",
  "MY",
  "MV",
  "ML",
  "MT",
  "MR",
  "MU",
  "MX",
  "MD",
  "MN",
  "ME",
  "MA",
  "MZ",
  "MM",
  "NA",
  "NP",
  "NL",
  "NZ",
  "NI",
  "NE",
  "NG",
  "NO",
  "OM",
  "PK",
  "PA",
  "PG",
  "PY",
  "PE",
  "PH",
  "PL",
  "PT",
  "QA",
  "RO",
  "RU",
  "RW",
  "WS",
  "ST",
  "SA",
  "SN",
  "RS",
  "SC",
  "SL",
  "SG",
  "SK",
  "SI",
  "SB",
  "ZA",
  "ES",
  "LK",
  "KN",
  "LC",
  "VC",
  "SD",
  "SR",
  "SZ",
  "SE",
  "CH",
  "SY",
  "TW",
  "TJ",
  "TZ",
  "TH",
  "TL",
  "TG",
  "TO",
  "TT",
  "TN",
  "TR",
  "TM",
  "UG",
  "UA",
  "AE",
  "GB",
  "US",
  "UY",
  "UZ",
  "VU",
  "VE",
  "VN",
  "YE",
  "ZM",
  "ZW"
];

var defaultCountryResources = {

  "money":0,
  "connections": {
    "copper": 0,
    "copperInsulated":0,
    "gold":0,
    "goldInsulated":0,
    "fiber":0,
    "total":0
  },
  "datacenters":0,
  "bandwidth": {
      "current":0,
      "max":10,
      "unit":"MBps"
  }
};

var gameCountryResources = new Array();

function initCountryResources() {
    for( code in gameCountryCodes ) {
	gameCountryResources.push({"code":code, "resources":defaultCountryResources});
    }
}

function gameCountryResourcesText(code) {
    gcrcr = gameCountryResources[code].resources;
    console.log(gameCountryResources[code].resources.money);
    console.log(gameCountryResources[code].resources.connections.copper);
    console.log(gameCountryResources[code].resources.connections.copperInsulated);
    console.log(gameCountryResources[code].resources.connections.gold);
    console.log(gameCountryResources[code].resources.connections.goldInsulated);
    console.log(gameCountryResources[code].resources.fiber);
    console.log(gameCountryResources[code].resources.total);
    console.log(gameCountryResources[code].resources.datacenters);
    console.log(gameCountryResources[code].resources.bandwidth.current);
    console.log(gameCountryResources[code].resources.bandwidth.max);
    console.log(gameCountryResources[code].resources.bandwidth.unit);
    var string = "money #0 connections {copper: #1, copperIsulated: #2, gold: #3, goldIsulated: #4, fiber #5 } bandwidth #6/#7 #8 ";

    string.replace("#0",gameCountryResources[code].resources.money);
    string.replace("#1",gameCountryResources[code].resources.connections.copper);
    string.replace("#2",gameCountryResources[code].resources.connections.copperInsulated);
    string.replace("#3",gameCountryResources[code].resources.connections.gold);
    string.replace("#4",gameCountryResources[code].resources.connections.goldInsulated);
    string.replace("#5",gameCountryResources[code].resources.fiber);
    string.replace("#6",gameCountryResources[code].resources.bandwidth.current);
    string.replace("#7",gameCountryResources[code].resources.bandwidth.max);
    string.replace("#8",gameCountryResources[code].resources.bandwidth.unit);

    var string = "money "+gcrcr.money+", connections {copper: "+gcrcr.connections.copper+", copperInsulated: "+gcrcr.connections.copperInsulated+", gold: "+gcrcr.connections.gold+", goldInsulated: 5, fiber #5 } bandwidth #6/#7 #8 ";
    return string;
    
}
