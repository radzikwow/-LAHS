class CalculationService
  attr_reader :success
  def initialize(current_level)
    @current_level = current_level
    @success = false
  end

  def perform!
    chances = @current_level.success_chance.base
    array = rand(0..100)
    @success = array <= chances

  end
end
