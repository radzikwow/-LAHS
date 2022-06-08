class CalculationService
  attr_reader :success

  def initialize(current_level, item)
    @current_level = current_level
    @item = item
    @success = false
  end

  def perform!
  chances = self.chance
  array = rand(0..100)
  @success = array <= chances.base
  end

  private

  def chance
    case @current_level.level
    when (0..6)
      SuccessChance.find_by(base: 100)
    when 7
      SuccessChance.find_by(base: 60)
    when 8
      SuccessChance.find_by(base: 45)
    when (9..11)
      SuccessChance.find_by(base: 30)
    when (12..14)
      SuccessChance.find_by(base: 15)
    when (15..17)
      SuccessChance.find_by(base: 10)
    when (18..19)
      SuccessChance.find_by(base: 5)
    end
  end

end
