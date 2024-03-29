class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  private
  def user_params
    params.fetch(:user, {}).permit(:username, :password)
  end
end
