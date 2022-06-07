Material.destroy_all
Item.destroy_all
SuccessChance.destroy_all
CurrentLevel.destroy_all
Attempt.destroy_all
p "Destroying all seeds"
p "All seeds destroyed"
attempt = Attempt.create!
p "Creating an attempt"
current_level = CurrentLevel.create!(level: 12)
CurrentLevel.create!(level: 15)
p "Creating a current level"
SuccessChance.create!(current_level: current_level, base: 30, max: 60)
p "Creating a success chance"
item1 = Item.create!(name: "weapon", item_type: "weapon", current_level: current_level, attempt: attempt)
p "Creating item1 as item1"
Item.create!(name: "helmet", item_type: "armour", current_level: current_level, attempt: attempt)
p "Creating item2"
Material.create!(item: item1, name: "leapstone", amount: 20, current_level: current_level)
p "Creating material"
