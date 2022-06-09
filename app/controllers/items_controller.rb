class ItemsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @items = Item.order(:order)
  end

  def update_all
    ctrl = 0
    @current_levels = []
    @items = []

    params[:_json].each do |input|
      @item = Item.find_by(name: input[:name].downcase.strip)
      @current_level = CurrentLevel.find_by(level: input[:current_level])
      @item.update(current_level: @current_level)

      if @item.update(current_level: @current_level)
        ctrl += 1
      end

      @items << @item
      @current_levels << @current_level
    end

    raise
    # if ctrl == params[:_json].length
    redirect_to pages_path(current_levels: @current_levels, items: @items)
    # else
    #   render :index
    # end
  end
end

# @item = Item.find_by(name: params[:item][:name])
#       @current_level = CurrentLevel.find_by(level: params[:item][:current_level])
#       @item.update(current_level: @current_level)
#       # calculation?(@current_level)
#       service = CalculationService.new(@current_level, @item)
#       service.perform!

#       if @item.update(current_level: @current_level)
#         redirect_to pages_path(current_level: @current_level, item: @item)
#       else
#         render :index
#       end
