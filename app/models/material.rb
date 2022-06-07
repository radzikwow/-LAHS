class Material < ApplicationRecord
  belongs_to :item
  belongs_to :current_level
end
