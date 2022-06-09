class PagesController < ApplicationController

  def home

    @items = []
    @current_levels = []
    params[:items].each_with_index do |item, idx|
      @current_levels << CurrentLevel.find(params[:current_levels][idx])
      @items << Item.find(item)
    end

    # @current_level = CurrentLevel.find(params[:current_level])
    # @item = Item.find(params[:item])

    # @materials = @item.materials.where(current_level: @current_level)
    # service = CalculationService.new(@current_level, @item)
    # @success = service.perform!
    # Attempt.create!
    # # counter for the total attemps made on the session
    # @total_attempt_counter = Attempt.all.count - 1
  end
end
