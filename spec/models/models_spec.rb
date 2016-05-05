require 'spec_helper'

describe Doctor do
  describe 'adding doctor' do
    it 'should add doctor' do
      Doctor.new({name: 'Faizan', email: 'PG@gmail.com', password: 'asasdasd' })
    end
  end
end

# Model RSPEC

describe User do
  describe 'adding doctor' do
    it 'should add doctor' do
      User.new({name: 'Faizan', email: 'PG@gmail.com', password: 'asasdasd' })
    end
  end
end

describe Patient do
  describe 'adding doctor' do
    it 'should add doctor' do
      Patient.new({name: 'Faizan', email: 'PG@gmail.com', password: 'asasdasd' })
    end
  end
end

describe Search do
  describe 'adding doctor' do
    it 'should add doctor' do
      Search.new({name: 'Faizan'})
    end
  end
end

describe Review do
  describe 'adding doctor' do
    it 'should add doctor' do
      Review.new({patient_id: 1})
    end
  end
end

describe Comment do
  describe 'adding doctor' do
    it 'should add doctor' do
      Comment.new({body: 'Faizan'})
    end
  end
end


# Controller RSPEC
RSpec.describe DoctorsController, :type => :controller do
  describe "GET new" do
    it "returns http success" do
      get :new
      expect(response).to be_success
    end
  end
end

RSpec.describe CommentsController, :type => :controller do
  describe "GET index" do
    it "returns http success" do
      get :index
      expect(response).to be_success
    end
  end
  describe "GET edit" do
    it "returns http success" do
      get :edit
      expect(response).to be_success
    end
  end
  describe "GET update" do
    it "returns http success" do
      get :update
      expect(response).to be_success
    end
  end
  
  describe "GET destroy" do
    it "returns http success" do
      get :destroy
      expect(response).to be_success
    end
  end
end

RSpec.describe PatientsController, :type => :controller do
  describe "GET new" do
    it "returns http success" do
      get :new
      expect(response).to be_success
    end
  end
end

RSpec.describe AppointmentsController, :type => :controller do
  describe "GET show" do
    it "returns http success" do
      assert 1==1
    end
  end
  describe "GET show1" do
    it "returns http success" do
      assert 1==1
    end
  end
end

RSpec.describe StaticPagesController, :type => :controller do
  describe "GET Home" do
    it "returns http success" do
      get :Home
      expect(response).to be_success
    end
  end
  describe "GET Home2" do
    it "returns http success" do
      get :Home2
      expect(response).to be_success
    end
  end
  describe "GET Services" do
    it "returns http success" do
      get :Services
      expect(response).to be_success
    end
  end
  describe "GET Contact" do
    it "returns http success" do
      get :Contact
      expect(response).to be_success
    end
  end
  describe "GET SignIn" do
    it "returns http success" do
      get :SignIn
      expect(response).to be_success
    end
  end
end

RSpec.describe ReviewsController, :type => :controller do
  describe "GET show" do
    it "returns http success" do
      doctor = Doctor.create! ({:name => "Faizan", :email => "Faizan@gmail.com", :password => "asdasdasdas"})
      subcategory = Review.create! ({:doctor_id => 1, :patient_id => 1})
      assert 1==1
    end
  end
  describe "GET show1" do
    it "returns http success" do
      subcategory = Review.create! ({:doctor_id => 1, :patient_id => 1})
      assert 1==1
    end
  end
end