class Item < ApplicationRecord
  belongs_to :current_level
  belongs_to :attempt
  has_many :materials
end
