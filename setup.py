from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in souvenir_form/__init__.py
from souvenir_form import __version__ as version

setup(
	name="souvenir_form",
	version=version,
	description="Souvenir_Form",
	author="sdc",
	author_email="sdc@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
