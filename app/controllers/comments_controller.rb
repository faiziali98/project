class CommentsController < ApplicationController
  def index

  end
  def update

  end
  def new

  end
  def show

  end
  def create
    @forum = Forum.find(params[:forum_id])
    @comment=@forum.comments.create(params[:comment].permit(:body));
    redirect_to discussion_form_path
  end
  def edit

  end
  def destroy

  end

end
