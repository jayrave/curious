require 'net/http'

uri = URI 'http://www.google.com/search'
params = {q: 'love'}
uri.query = URI.encode_www_form params
puts uri

# req = Net::HTTP::Get.new uri
# res = ""
# Net::HTTP.start uri.host do |http|
#   res = http.request req
# end

res = Net::HTTP.get_response uri
puts res.code
puts res.message

File.open 'C:/Users/jay/Desktop/result.html', 'w' do |file|
  file.puts res.body
end
