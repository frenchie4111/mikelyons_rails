class BlogPostsController < ApplicationController

	def show_all
		@blog_posts = BlogPost.all
		@categories = Category.all
	end

	def show_category
		@blog_posts = Category.find(params[:category]).blog_posts
		@categories = Category.all
	end
end
