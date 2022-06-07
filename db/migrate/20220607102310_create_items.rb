class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :item_type
      t.references :current_level, null: false, foreign_key: true
      t.references :attempt, null: false, foreign_key: true

      t.timestamps
    end
  end
end
