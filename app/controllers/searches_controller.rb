class SearchesController < ApplicationController

def new
  @search = Search.new
#  @patient = Patient.find(params[:patid])
end

def create
  @search = Search.new(search_params)
  if @search.save
    redirect_to @search
  else

  end
end

def show
  @search = Search.find(params[:id])

end

private
  def search_params
    params.require(:search).permit(:name, :speciality, :area,:gender)
  end
  def pat_params
    params.require(:search).permit(:patid)
  end
end
