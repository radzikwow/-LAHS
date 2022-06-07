# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
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
p "Creating a current level"

SuccessChance.create!(current_level: current_level, base: 30, max: 60)
p "Creating a success chance"

item1 = Item.create!(name: "weapon", item_type: "weapon", current_level: current_level, attempt: attempt)
p "Creating item1 as item1"
Item.create!(name: "helmet", item_type: "armour", current_level: current_level, attempt: attempt)
p "Creating item2"

Item.create!(name: "weapon", item_type: "weapon")
Item.create!(name: "helmet", item_type: "armour")
