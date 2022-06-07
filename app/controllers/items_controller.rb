class ItemsController < ApplicationController
  def new
    @item = Item.new
  end

  def update
    raise
    @item = Item.where(name: "weapon")
  end
end
