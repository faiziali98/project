require 'spec_helper'

describe DoctorsController do
  describe 'finding similar movies by director' do
    before :each do
      @m = [mock("Doctor"), mock("Doctor")]
      @m[0].stub(:id).and_return(1)
      @m[0].stub(:name).and_return("Faizan")
      @m[0].stub(:email).and_return("Faizan@gmail.com")
      @m[0].stub(:password).and_return("Faizan123")
      Movie.stub(:find).and_return(@m[0])
    end
    
    it 'redirect to show route' do
      { :post => movie_show_path(1) }.
      should route_to(:controller => "doctors")
    end
  end
end
