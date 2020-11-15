# Balance_sheet_webApp

<h1>Primary information</h1>

Aim of this project is to create a front end model for a webApp which can manage user's balance sheet in a short time period.

##Scripts

1) HTML
2) CSS
3) Vanilla JavaScript

##Plugins

The only plug in which used here is Bootstrap, Bootstrap's library is used for the purpose of styling.

##How to use

To use this webApp a user has to just provide three inputs.
1) First thing that a user needs to input is balance, which should be a positive real number at least greater than 100 for the sake of real life scenario.

2) Second input can be anything to give a short description of spending.

3) Third input must be a positive number to reflect a valid amount.

##Multiple entries

A user can provide more than one entry for both second and third input, while doing so one must make sure that for each description entry(second input) their has to be a corresponding amount entry(third input). That is number of entries in 2nd input must be equal to number of entries in third input.

Syntax for multiple entries: In order to process more than one entry, each entry in 2nd input must be separated with a '-' sign(dash or minus sign) and same process must be followed for third input. For example if a user wants to enter $100 for books, $20 for coffee, $300 for cinema, the 2nd input for description should be: books-coffee-cinema and third input for amount should be 100-20-300. 
