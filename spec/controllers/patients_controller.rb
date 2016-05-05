describe PatientsController do
  describe 'showing the patients' do
    before :each do
      @m = mock("Patient")
      @m.stub(:name).and_return("Faizan")
      @m.stub(:email).and_return("Faizan@gmail.com")
      @m.stub(:password).and_return("Faizan123")
      Movie.stub(:find).and_return(@m)
    end
    
    it 'redirect to show route' do
      Patient.new({name: 'Faizan', email: 'PG@gmail.com', password: 'asasdasd' })
    end
  end
end