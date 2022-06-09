class PagesController < ApplicationController
  def home
    @current_level = CurrentLevel.find(params[:current_level])
    @item = Item.find(params[:item])
    @materials = @item.materials.where(current_level: @current_level)
    service = CalculationService.new(@current_level, @item)
    @success = service.perform!
  end
end
