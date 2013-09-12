class MainController < ApplicationController
  def index
    @things = Thing.all
  end
end
