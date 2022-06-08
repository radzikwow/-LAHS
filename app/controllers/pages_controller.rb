class PagesController < ApplicationController
  def home
    @current_level = CurrentLevel.find(params[:current_level])
    @item = Item.joins(:current_level).where(current_level: @current_level)
    @materials = @item[0].materials.where(current_level: @current_level)
    service = CalculationService.new(@current_level, @item)
    @success = service.perform!
  end
end
