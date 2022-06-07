class ItemsController < ApplicationController

  def index
    @items = Item.all
  end

  def update
    @item = Item.find_by(name: params[:item][:name])
    @current_level = CurrentLevel.find_by(level: params[:item][:current_level])
    @item.update(current_level: @current_level)

    if @item.update(current_level: @current_level)
      redirect_to root_path
    else
      render :index
    end
  end

end
