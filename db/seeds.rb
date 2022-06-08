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

# levels from 0-6
7.times do |i|
  current_level = CurrentLevel.create!(level: i)
  SuccessChance.create!(current_level: current_level, base: 100, max: 100)
end
# level 7
current_level = CurrentLevel.create(level: 7)
SuccessChance.create!(current_level: current_level, base: 60, max: 100)

# level 8
current_level = CurrentLevel.create(level: 8)
SuccessChance.create!(current_level: current_level, base: 45, max: 90)

# level 9 - 11
3.times do |i|
  current_level = CurrentLevel.create(level: i + 9)
  SuccessChance.create!(current_level: current_level, base: 30, max: 60)

end
# level 12 - 14
3.times do |i|
  current_level = CurrentLevel.create(level: i + 12)
  SuccessChance.create!(current_level: current_level, base: 15, max: 30)

end
# level 15 - 17
3.times do |i|
  current_level = CurrentLevel.create(level: i + 15)
  SuccessChance.create!(current_level: current_level, base: 10, max: 20)

end
# level 18 - 19
2.times do |i|
  current_level = CurrentLevel.create(level: i + 18)
  SuccessChance.create!(current_level: current_level, base: 5, max: 10)
end

p "Creating items"
item1 = Item.create!(name: "weapon", item_type: "weapon", current_level: current_level, attempt: attempt)
5.times do |item|
  Item.create!(name: "helmet", item_type: "armour", current_level: current_level, attempt: attempt)
end
item2 = Item.find_by(name: "helmet")
p "Creating materials"

# levels from 0-6
7.times do |i|
  current_level = CurrentLevel.find_by(level:i)
  Material.create!(item: item1, name: "shards", amount: 10, current_level: current_level)
  Material.create!(item: item1, name: "gold", amount: 10, current_level: current_level)
  Material.create!(item: item1, name: "silver", amount: 10, current_level: current_level)
  Material.create!(item: item1, name: "leapstone", amount: 10, current_level: current_level)
  Material.create!(item: item1, name: "destruction", amount: 10, current_level: current_level)
  Material.create!(item: item1, name: "oreha", amount: 10, current_level: current_level)
  Material.create!(item: item2, name: "gold", amount: 10, current_level: current_level)
  Material.create!(item: item2, name: "shards", amount: 10, current_level: current_level)
  Material.create!(item: item2, name: "silver", amount: 10, current_level: current_level)
  Material.create!(item: item2, name: "leapstone", amount: 10, current_level: current_level)
  Material.create!(item: item2, name: "guardian", amount: 10, current_level: current_level)
  Material.create!(item: item2, name: "oreha", amount: 10, current_level: current_level)
end

  # level 7
current_level = CurrentLevel.find_by(level:7)
Material.create!(item: item1, name: "shards", amount: 20, current_level: current_level)
Material.create!(item: item1, name: "gold", amount: 20, current_level: current_level)
Material.create!(item: item1, name: "silver", amount: 20, current_level: current_level)
Material.create!(item: item1, name: "leapstone", amount: 20, current_level: current_level)
Material.create!(item: item1, name: "destruction", amount: 20, current_level: current_level)
Material.create!(item: item1, name: "oreha", amount: 20, current_level: current_level)
Material.create!(item: item2, name: "gold", amount: 20, current_level: current_level)
Material.create!(item: item2, name: "shards", amount: 20, current_level: current_level)
Material.create!(item: item2, name: "silver", amount: 20, current_level: current_level)
Material.create!(item: item2, name: "leapstone", amount: 20, current_level: current_level)
Material.create!(item: item2, name: "guardian", amount: 20, current_level: current_level)
Material.create!(item: item2, name: "oreha", amount: 20, current_level: current_level)

# level 8
current_level = CurrentLevel.find_by(level:8)
Material.create!(item: item1, name: "shards", amount: 40, current_level: current_level)
Material.create!(item: item1, name: "gold", amount: 40, current_level: current_level)
Material.create!(item: item1, name: "silver", amount: 40, current_level: current_level)
Material.create!(item: item1, name: "leapstone", amount: 40, current_level: current_level)
Material.create!(item: item1, name: "destruction", amount: 40, current_level: current_level)
Material.create!(item: item1, name: "oreha", amount: 40, current_level: current_level)
Material.create!(item: item2, name: "gold", amount: 40, current_level: current_level)
Material.create!(item: item2, name: "shards", amount: 40, current_level: current_level)
Material.create!(item: item2, name: "silver", amount: 40, current_level: current_level)
Material.create!(item: item2, name: "leapstone", amount: 40, current_level: current_level)
Material.create!(item: item2, name: "guardian", amount: 40, current_level: current_level)
Material.create!(item: item2, name: "oreha", amount: 40, current_level: current_level)

# level 9 - 11
3.times do |i|
  current_level = CurrentLevel.find_by(level:i + 9)
  Material.create!(item: item1, name: "shards", amount: 80, current_level: current_level)
  Material.create!(item: item1, name: "gold", amount: 80, current_level: current_level)
  Material.create!(item: item1, name: "silver", amount: 80, current_level: current_level)
  Material.create!(item: item1, name: "leapstone", amount: 80, current_level: current_level)
  Material.create!(item: item1, name: "destruction", amount: 80, current_level: current_level)
  Material.create!(item: item1, name: "oreha", amount: 80, current_level: current_level)
  Material.create!(item: item2, name: "gold", amount: 80, current_level: current_level)
  Material.create!(item: item2, name: "shards", amount: 80, current_level: current_level)
  Material.create!(item: item2, name: "silver", amount: 80, current_level: current_level)
  Material.create!(item: item2, name: "leapstone", amount: 80, current_level: current_level)
  Material.create!(item: item2, name: "guardian", amount: 80, current_level: current_level)
  Material.create!(item: item2, name: "oreha", amount: 80, current_level: current_level)

end
# level 12 - 14
3.times do |i|
  current_level = CurrentLevel.find_by(level:i + 12)
  Material.create!(item: item1, name: "shards", amount: 160, current_level: current_level)
  Material.create!(item: item1, name: "gold", amount: 160, current_level: current_level)
  Material.create!(item: item1, name: "silver", amount: 160, current_level: current_level)
  Material.create!(item: item1, name: "leapstone", amount: 160, current_level: current_level)
  Material.create!(item: item1, name: "destruction", amount: 160, current_level: current_level)
  Material.create!(item: item1, name: "oreha", amount: 160, current_level: current_level)
  Material.create!(item: item2, name: "gold", amount: 160, current_level: current_level)
  Material.create!(item: item2, name: "shards", amount: 160, current_level: current_level)
  Material.create!(item: item2, name: "silver", amount: 160, current_level: current_level)
  Material.create!(item: item2, name: "leapstone", amount: 160, current_level: current_level)
  Material.create!(item: item2, name: "guardian", amount: 160, current_level: current_level)
  Material.create!(item: item2, name: "oreha", amount: 160, current_level: current_level)

end
# level 15 - 17
3.times do |i|
  current_level = CurrentLevel.find_by(level:i + 15)
  Material.create!(item: item1, name: "shards", amount: 320, current_level: current_level)
  Material.create!(item: item1, name: "gold", amount: 320, current_level: current_level)
  Material.create!(item: item1, name: "silver", amount: 320, current_level: current_level)
  Material.create!(item: item1, name: "leapstone", amount: 320, current_level: current_level)
  Material.create!(item: item1, name: "destruction", amount: 320, current_level: current_level)
  Material.create!(item: item1, name: "oreha", amount: 320, current_level: current_level)
  Material.create!(item: item2, name: "gold", amount: 320, current_level: current_level)
  Material.create!(item: item2, name: "shards", amount: 320, current_level: current_level)
  Material.create!(item: item2, name: "silver", amount: 320, current_level: current_level)
  Material.create!(item: item2, name: "leapstone", amount: 320, current_level: current_level)
  Material.create!(item: item2, name: "guardian", amount: 320, current_level: current_level)
  Material.create!(item: item2, name: "oreha", amount: 320, current_level: current_level)

end
# level 18 - 19
2.times do |i|
  current_level = CurrentLevel.find_by(level:i + 18)
  Material.create!(item: item1, name: "shards", amount: 640, current_level: current_level)
  Material.create!(item: item1, name: "gold", amount: 640, current_level: current_level)
  Material.create!(item: item1, name: "silver", amount: 640, current_level: current_level)
  Material.create!(item: item1, name: "leapstone", amount: 640, current_level: current_level)
  Material.create!(item: item1, name: "destruction", amount: 640, current_level: current_level)
  Material.create!(item: item1, name: "oreha", amount: 640, current_level: current_level)
  Material.create!(item: item2, name: "gold", amount: 640, current_level: current_level)
  Material.create!(item: item2, name: "shards", amount: 640, current_level: current_level)
  Material.create!(item: item2, name: "silver", amount: 640, current_level: current_level)
  Material.create!(item: item2, name: "leapstone", amount: 640, current_level: current_level)
  Material.create!(item: item2, name: "guardian", amount: 640, current_level: current_level)
  Material.create!(item: item2, name: "oreha", amount: 640, current_level: current_level)
end
p "All instances created!"
