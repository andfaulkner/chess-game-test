Exercise 1
==========
Match all lines with a fruit or a vegetable, with a single regex (and match no other lines).
Don't match cases where anything but a fruit or vegetable is at the beginning:

## Data
carrot - vegetable
pear - fruit
oatmeal - cereal
cheerios - cereal
chips - snack
milk - drink
Lettuce - vegetable
chex - cereal
coke - drink
apple - fruit
star fruit - fruit
2. banana - fruit

## Expected matches
carrot - vegetable
pear - fruit
Lettuce - vegetable
apple - fruit
star fruit - fruit


----------------------------------------------------------------------------------------------------
Exercise 2
==========

Match all variants of "yeet", with any number of "e"s.
Don't match variants of yeet with different endings.
e.g. match "yeet" but not "yeety".
Match "yeeeeeeet" but not "yeeeeeett":

yeet
yeeto
yeeeeeet
yeeeeeeeeet
yeeeeett
yeeety
yeeeeeeeeeeeeeet
yeeeeeto

## Expected matches
yeet
yeeeeeet
yeeeeeeeeet
yeeeeeeeeeeeeeet


----------------------------------------------------------------------------------------------------
Exercise 3
==========
