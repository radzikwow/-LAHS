class CreateSuccesChances < ActiveRecord::Migration[6.1]
  def change
    create_table :succes_chances do |t|
      t.references :current_level, null: false, foreign_key: true
      t.integer :base
      t.integer :max

      t.timestamps
    end
  end
end
