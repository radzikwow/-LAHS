class ItemsController < ApplicationController

  def index
    @items = Item.order(:order)
  end
end
