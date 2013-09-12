class ThingsController < ApplicationController
  respond_to :json

  def index
    respond_with Thing.all
  end

  def show
    respond_with Thing.find(params[:id])
  end

  def create
    respond_with Thing.create(thing_params)
  end

  def update
    thing = Thing.find(params[:id])
    respond_with thing.update_attributes!(thing_params)
  end

  def destroy
    respond_with Thing.destroy(params[:id])
  end

  private

    # Required because of rails 4
    def thing_params
      params.permit(:name)
    end
end
