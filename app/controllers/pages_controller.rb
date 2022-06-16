class PagesController < ApplicationController

  def home

    @current_levels = []
    @items = []
    # materials hash of arrays: each entry is an array of materials for a specific item
    @materials = {}

    @optionals = ["solar grace", "solar blessing", "solar protection"]

    # {"item"=>{"helmet"=>"7", "shoulders"=>"3", "armour"=>"14", "pants"=>"2", "gloves"=>"12", "weapon"=>"12"}, "commit"=>"Save Item"}

    params[:item].each_key do |item|
      @item = Item.find_by(name: item)
      @current_level = CurrentLevel.find_by(level: params[:item][item])
      @item.update(current_level: @current_level)

      @items << @item
      @current_levels << @current_level
    end

    @items.each do |item|
      @materials[item.name] = item.materials.where(current_level: item.current_level.level)
    end

    @service = CalculationService.new(@items[1].current_level, @items[1])
    @success = @service.perform!
    Attempt.create!
    # # counter for the total attemps made on the session
    @total_attempt_counter = Attempt.all.count - 1
  end
end





# if perform success ? current_level = current_level + 1



# OPTIONALS !!!
# MAKE AN ACTUAL CHANCE VARIABLE WHICH WILL BE THE SUMMARY
# OF ALL VARIABLES INFLUENCING THE END CHANCE OF HONING
# MAKE PROGRESS BAR DISPLAY THE ACTUAL CHANCE RATHER THEN BASE
# JAVASCRIPT SOMETHING SOMETHING?
# FEND OFF SUICIDAL THOUGHTS BEFORE FRIDAY
#
