class Api::BenchesController < ApplicationController
    def new
        @bench = Bench.new
    end

    def create
        @bench = Bench.new(bench_params)
        if @bench.save
            render json: @bench
        else
            render json: @bench.errors.full_messages
        end
    end

  private
  def bench_params
    params.fetch(:bench, {}).permit(:description, :lat, :lng)
  end
end
