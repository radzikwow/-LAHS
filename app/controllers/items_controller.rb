class ItemsController < ApplicationController
  def edit
    @item = Item.where(name: "weapon")
  end

  def update
    raise
    @item = Item.where(name: "weapon",)
  end
end
