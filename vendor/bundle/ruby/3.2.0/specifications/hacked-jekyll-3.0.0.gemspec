# -*- encoding: utf-8 -*-
# stub: hacked-jekyll 3.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "hacked-jekyll".freeze
  s.version = "3.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["piazzai".freeze]
  s.date = "2024-06-02"
  s.email = ["42124135+piazzai@users.noreply.github.com".freeze]
  s.homepage = "https://github.com/piazzai/hacked-jekyll".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.4.10".freeze
  s.summary = "Jekyll microtheme that looks like JSON".freeze

  s.installed_by_version = "3.4.10" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<github-pages>.freeze, ["~> 231"])
  s.add_runtime_dependency(%q<webrick>.freeze, ["~> 1.8", "= 1.8.1"])
end
