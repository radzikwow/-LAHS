# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_06_09_145403) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attempts", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "current_levels", force: :cascade do |t|
    t.integer "level", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "item_type"
    t.bigint "current_level_id", null: false
    t.bigint "attempt_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "order"
    t.index ["attempt_id"], name: "index_items_on_attempt_id"
    t.index ["current_level_id"], name: "index_items_on_current_level_id"
  end

  create_table "materials", force: :cascade do |t|
    t.bigint "item_id", null: false
    t.bigint "current_level_id", null: false
    t.string "name"
    t.integer "amount"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["current_level_id"], name: "index_materials_on_current_level_id"
    t.index ["item_id"], name: "index_materials_on_item_id"
  end

  create_table "success_chances", force: :cascade do |t|
    t.bigint "current_level_id", null: false
    t.integer "base"
    t.integer "max"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["current_level_id"], name: "index_success_chances_on_current_level_id"
  end

  add_foreign_key "items", "attempts"
  add_foreign_key "items", "current_levels"
  add_foreign_key "materials", "current_levels"
  add_foreign_key "materials", "items"
  add_foreign_key "success_chances", "current_levels"
end
