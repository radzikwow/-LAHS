class CurrentLevel < ApplicationRecord
  has_one :success_chance
  has_many :materials
  validates :level, numericality: { only_integer: true, in: 0..19 }
end
