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

def create_materials(current_level, amount)
  Item.all.each do |item|
    Material.create!(item: item, name: "silver", amount: amount, current_level: current_level)
    Material.create!(item: item, name: "gold", amount: amount, current_level: current_level)
    Material.create!(item: item, name: "shards", amount: amount, current_level: current_level)
    Material.create!(item: item, name: "oreha", amount: amount, current_level: current_level)
    if item.name == "weapon"
      Material.create!(item: item, name: "destruction", amount: amount, current_level: current_level)
    else
      Material.create!(item: item, name: "guardian", amount: amount, current_level: current_level)
    end
    Material.create!(item: item, name: "leapstone", amount: amount, current_level: current_level)
  end
end

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
Item.create!(name: "weapon", item_type: "weapon", order: 6, current_level: current_level, attempt: attempt)

armours = ["helmet", "shoulders", "armour", "pants", "gloves"]
armours.each_with_index do |armour, index|
  Item.create!(name: armour, item_type: "armour", order: index + 1, current_level: current_level, attempt: attempt)
end

p "Creating materials"

# levels from 0-6
7.times do |i|
  current_level = CurrentLevel.find_by(level: i)
  create_materials(current_level, 10)
  i + 1
end

# level 7
current_level = CurrentLevel.find_by(level: 7)
create_materials(current_level, 20)

# level 8
current_level = CurrentLevel.find_by(level: 8)
create_materials(current_level, 40)

# level 9 - 11
3.times do |i|
  current_level = CurrentLevel.find_by(level: i + 9)
  create_materials(current_level, 80)
  i + 1
end
# level 12 - 14
3.times do |i|
  current_level = CurrentLevel.find_by(level: i + 12)
  create_materials(current_level, 160)
  i + 1
end
# level 15 - 17
3.times do |i|
  current_level = CurrentLevel.find_by(level: i + 15)
  create_materials(current_level, 320)
  i + 1
end
# level 18 - 19
2.times do |i|
  current_level = CurrentLevel.find_by(level: i + 18)
  create_materials(current_level, 640)
  i + 1
end
p "All instances created!"
