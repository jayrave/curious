# An awesome method to find out where is a method present for a given object

module Kernel
  def method_placement(obj = self, method_name)
    method_name = method_name.to_sym
    return "No such method for the given object!! It may be a private method. I can't place private methods, yet!!" unless obj.respond_to? method_name
    return "It is a singleton method" if obj.singleton_methods.include? method_name
    ancestors = obj.class.ancestors
    ancestors.each do |ancestor|
      methods = ancestor.public_instance_methods false
      return ancestor if methods.include? method_name
    end
  end
end

# TESTS
s = String.new
puts s.method_placement :asdf

class << s
  def asdf
  end
end

puts s.method_placement :asdf
puts s.method_placement :replace
puts s.method_placement :singleton_class