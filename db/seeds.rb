Item.destroy_all
Attempt.destroy_all
Material.destroy_all
SuccessChance.destroy_all
CurrentLevel.destroy_all
p "Destroying all seeds"
p "All seeds destroyed"
p "Creating an attempt"
attempt = Attempt.create!
p "Creating a current level"
20.times do |i|
  CurrentLevel.create(level: i)
end
current_level = CurrentLevel.where(level: 0).first
p "Creating success chances"
SuccessChance.create!(current_level: current_level, base: 60, max: 60)
SuccessChance.create!(current_level: current_level, base: 45, max: 60)
SuccessChance.create!(current_level: current_level, base: 30, max: 60)
SuccessChance.create!(current_level: current_level, base: 15, max: 60)
SuccessChance.create!(current_level: current_level, base: 10, max: 60)
SuccessChance.create!(current_level: current_level, base: 5, max: 60)
SuccessChance.create!(current_level: current_level, base: 3, max: 60)
p "Creating items"
item1 = Item.create!(name: "weapon", item_type: "weapon", current_level: current_level, attempt: attempt)
5.times do
  Item.create!(name: "helmet", item_type: "armour", current_level: current_level, attempt: attempt)
end
p "Creating materials"
Material.create!(item: item1, name: "shards", amount: 20, current_level: current_level)
Material.create!(item: item1, name: "gold", amount: 20, current_level: current_level)
Material.create!(item: item1, name: "silver", amount: 20, current_level: current_level)
Material.create!(item: item1, name: "leapstone", amount: 20, current_level: current_level)
Material.create!(item: item1, name: "destruction", amount: 20, current_level: current_level)
Material.create!(item: item1, name: "guardian", amount: 20, current_level: current_level)
Material.create!(item: item1, name: "oreha", amount: 20, current_level: current_level)
p "All instances created!"















p "Creating items"
item1 = Item.create!(name: "weapon", item_type: "weapon", current_level: current_level, attempt: attempt)
5.times do
  Item.create!(name: "helmet", item_type: "armour", current_level: current_level, attempt: attempt)
end
