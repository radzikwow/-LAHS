class Item < ApplicationRecord
  belongs_to :current_level
  belongs_to :attempt
end
