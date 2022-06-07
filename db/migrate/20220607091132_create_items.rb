class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :item_type
      t.integer :current_level
      t.integer :attempts

      t.timestamps
    end
  end
end
