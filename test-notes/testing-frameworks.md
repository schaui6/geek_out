# What is testing framework?

# Types of testing frameworks
There are many testing frameworks that work great.  Mini Test is the default testing framework in Rails 5. However, we will be using the RSpec testing framework instead.   


# RSpec

# How to set up RSpec in a Rails
Add rspec-rails to both the :development and :test groups in the Gemfile:
  <div class="console"><pre>
    group :development, :test do
      gem 'rspec-rails', '~> 3.4'
    end
  </pre>
  </div>