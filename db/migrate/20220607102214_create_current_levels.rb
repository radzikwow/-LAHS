class CreateCurrentLevels < ActiveRecord::Migration[6.1]
  def change
    create_table :current_levels do |t|
      t.integer :level

      t.timestamps
    end
  end
end
