class PagesController < ApplicationController

  def home

    @current_levels = []
    @items = []
    # materials hash of arrays: each entry is an array of materials for a specific item
    @materials = {}
    @mats = {
      silver: "https://i.imgur.com/sWFzPpF.png",
      gold: "https://i.imgur.com/bhEgr47.png",
      shards: "https://i.imgur.com/sjexkJA.png",
      oreha: "https://i.imgur.com/BcSu9Iv.png",
      destruction: "https://i.imgur.com/6zti2bC.png",
      leapstone: "https://i.imgur.com/wioa5ji.png",
      guardian: "https://i.imgur.com/JNFBDGK.png"
    }
    @matsid = ["sWFzPpF", "bhEgr47", "sjexkJA", "BcSu9Iv", "6zti2bC", "wioa5ji", "JNFBDGK"]

    @optionals = { 'solar grace': [24, 0.25], 'solar blessing': [12, 0.5], 'solar protection': [6, 1] }

    # {"item"=>{"helmet"=>"7", "shoulders"=>"3", "armour"=>"14", "pants"=>"2", "gloves"=>"12", "weapon"=>"12"}, "commit"=>"Save Item"}

    params[:item].each_key do |item|
      @item = Item.find_by(name: item)
      @current_level = CurrentLevel.find_by(level: params[:item][item])
      @item.update(current_level: @current_level)

      @items << @item
      @current_levels << @current_level
    end

    @items.each do |item|
      @materials[item.name] = item.materials.where(current_level: item.current_level)
    end

    @service = CalculationService.new(@items[1].current_level, @items[1])
    @success = @service.perform!
    Attempt.create!
    # # counter for the total attemps made on the session
    @total_attempt_counter = Attempt.all.count - 1
  end
end
