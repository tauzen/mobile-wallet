#Mobile Wallet 
Mobile Wallet is a [packaged web application](https://developer.mozilla.org/en-US/Marketplace/Options/Packaged_apps) for FirefoxOS devices, developed in collaboration between [DT SVIC](https://t-labs.us) and [T-Mobile Polska](https://www.t-mobile.pl/). This is a white-label wallet solution which utilizes [NFC](http://en.wikipedia.org/wiki/Near_field_communication) capabilities and [Secure Element](https://www.globalplatform.org/mediaguideSE.asp) API available in FirefoxOS 2.2. It includes typical scenarios showcasing web app interactions with NFC-enabled SIM card via SE API and can be used as a starting point to build commercial Mobile Wallet solutions for FirefoxOS.

Mobile Wallet supports payment and non-payment services compliant with [ISO/IEC 7816](http://en.wikipedia.org/wiki/ISO/IEC_7816) standard. 

##Features
* Payment/Non-payment applet management according to [Card Technology Contactless Services Card Specification v2.2 – Amendment C V1.1.1](http://globalplatform.org/specificationscard.asp) by [GlobalPlatform](http://www.globalplatform.org/aboutus.asp)
* Secure Element based PIN mechanism to protect app access implemented according to [ETSI TS 102 221 V8.2.0 (2009-06)
Smart Cards; UICC-Terminal interface; Physical and logical characteristics (Release 8)](http://www.etsi.org/deliver/etsi_ts/102200_102299/102221/08.02.00_60/ts_102221v080200p.pdf)
* Handling of Host Controller Interface EVT_TRANSACTION event (defined in [ETSI TS 102 622 V7.0.0 (2008-02) SmartCards; UICC - Contactless Front-end (CLF) interface;Host Controller Interface (HCI)(Release 7)](http://www.etsi.org/deliver/etsi_ts/102600_102699/102622/07.00.00_60/ts_102622v070000p.pdf))
* Fast-pay/One-time-pay modes - In "One-time-pay" mode payment card is deactivated after each contact-less transaction. User needs to explicitly activate the card before any future payments. "Fast-pay" mode keeps the payment card active all the time on contact-less interface.
* Customisable Secure Element access related properties - CRS (Contactless Registry Service) and UICC (Universal Integrated Circuit Card) AIDs and PIN P2 byte can be modified according to the SIM configuration.
* Clean, consistent with FirefoxOS UI - based on [Gaia](https://github.com/mozilla-b2g/gaia) system styles with custome made wallet and PIN components.

##Testing on a device
Prerequisites:
* NFC-enabled SIM card with Payment/Non-payment services provisioned by your Mobile Operator.
* FirefoxOS device with NFC and Secure Element API support. Currently these are supported on Nexus 5 running FirefoxOS 2.2 and above. Flame support should be supported in upcomming weeks.

Mobile Wallet is a ``certified`` app, Secure Element API is not yet available to ``privilaged`` apps. We are working on opening SE API access to all developers, but there are still some remaing issues related to Access Control which need to be sorted out. So to run application yourself you will need to:
* have a supported device with *Debugging via USB* set to *ADB and DevTools*
* enable ``dom.secureelement.enabled`` preference - you can do this in Gaia by adding a custom pref like [here](https://github.com/tauzen/gaia/blob/se_dev_testing/build/config/phone/custom-prefs.js#L6). 
* push the application to the device via [WebIDE](https://developer.mozilla.org/en-US/docs/Tools/WebIDE)


##License
```
  Copyright 2015 Deutsche Telekom, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```
