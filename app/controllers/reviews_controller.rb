class ReviewsController < ApplicationController
  def index
  end
  def create
    @doctor = Doctor.find(params[:review][:doctor_id])
    @patient = Patient.find(params[:review][:patient_id])

    @review = @doctor.reviews.build(review_params)
    # @patreview =@patient.reviews.create(review_params)
    if @review.save
      redirect_to(controller: 'appointments',action: 'show1' ,:id => @patient.id, :docid => @doctor.id )
    else
      redirect_to static_pages_Home_path
    end
  end
  def edit
  end
  def new

    @doctor = Doctor.find(params[:docid])
    @patient = Patient.find(params[:patid])
    @reviews = @doctor.reviews.build
    @reviews1 = @patient.reviews.build

  end
  def show

    @patient = Patient.find(params[:id])
    @reviews = @patient.reviews
  end
  def show1
    @doctor = Doctor.find(params[:did])
    @reviews = @doctor.reviews
  end
  private
  def review_params
    params.require(:review).permit(:waitTime,:overallRating,:besideManner,:patient_id,:doctor_id)
  end
end
