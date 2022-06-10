class AddColumnToItem < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :order, :integer
  end
end
