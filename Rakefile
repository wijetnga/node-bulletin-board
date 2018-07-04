require 'json'
require 'erb'

image = JSON.parse(File.read(ENV['PLUGIN_FILENAME']))['image']

task :create_json do
  template = File.read('bulletin-board-deployment.json.erb')
  renderer = ERB.new(template, nil, '-')
  File.open('bulletin-board-deployment.json', 'w') do |f|
    f.puts(renderer.result(binding))
  end
end