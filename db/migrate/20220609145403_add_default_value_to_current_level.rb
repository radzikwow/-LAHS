class AddDefaultValueToCurrentLevel < ActiveRecord::Migration[6.1]
  def change
    change_column :current_levels, :level, :integer, default: 0
  end
end
