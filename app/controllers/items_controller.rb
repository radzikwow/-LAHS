class ItemsController < ApplicationController
  def index
    @items = Item.all
  end

  def update
    @item = Item.find_by(name: params[:item][:name])
    @current_level = CurrentLevel.find_by(level: params[:item][:current_level])
    @item.update(current_level: @current_level)
    # calculation?(@current_level)
    service = CalculationService.new(@current_level, @item)
    service.perform!

    if @item.update(current_level: @current_level)
      redirect_to pages_path(current_level: @current_level, item: @item)
    else
      render :index
    end
  end

  def calculation?(current_level)
    chances = current_level.success_chance.base
    array = rand(0..100)
    array <= chances
  end
end
