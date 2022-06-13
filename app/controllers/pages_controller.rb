class PagesController < ApplicationController

  def home

    @current_levels = []
    @items = []

    @optionals = ["solar grace", "solar blessing", "solar protection"]
    # {"item"=>{"helmet"=>"7", "shoulders"=>"3", "armour"=>"14", "pants"=>"2", "gloves"=>"12", "weapon"=>"12"}, "commit"=>"Save Item"}
  
    params[:item].each_key do |item|
      @item = Item.find_by(name: item)
      @current_level = CurrentLevel.find_by(level: params[:item][item])
      @item.update(current_level: @current_level)

      @items << @item
      @current_levels << @current_level
    end

    # hardcoding materials for honing. Item = "helmet"
    @materials = @items[1].materials.where(current_level: @items[1].current_level.level)
    @service = CalculationService.new(@items[1].current_level, @items[1])
    @success = @service.perform!
    Attempt.create!
    # # counter for the total attemps made on the session
    @total_attempt_counter = Attempt.all.count - 1
  end
end
