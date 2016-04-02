class FollowersController < ApplicationController
def index
end
def new
  @doctor = Doctor.find(params[:id])
  #@patient = Patient.find(params[:id])

end

def create
  @doctor = Doctor.find(params[:follower][:doctor_id]);
  @patient = Patient.find(params[:follower][:patient_id]);
  #@follow = @docfollowed.followers.build
  @docfollow = @doctor.followers.create(follower_params);
  #Rails.logger.debug("My object: #{@docfollowed.inspect}")
  #@patfollow = @patient.followers.create(follower_params);
  #Rails.logger.debug("My object: #{@patfollow.inspect}")
  if @docfollow.save

    #redirect_to static_pages_Home_path
    redirect_to(controller: "followers" , action:"new",:id =>@doctor.id ,:pid => @patient.id);
  else
    redirect_to static_pages_Home_path
  end
end

def show
end

def destroy
end
def add_follower

end

private
  def follower_params
    params.require(:follower).permit(:doctor_id,:patient_id)
  end
end
