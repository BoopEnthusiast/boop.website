import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

# Specify the URL of the page
url = 'https://cinni.net/web'

# Send a GET request to the URL
response = requests.get(url)

# Parse the HTML content of the page with BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

# Find all of the <img> tags on the page
images = soup.find_all('img')

# Specify the directory to save the images
directory = 'scrapedImages'

# Create the directory if it doesn't exist
if not os.path.exists(directory):
    os.makedirs(directory)

# Download each image
for image in images:
    img_url = urljoin(url, image['src'])
    name = img_url.split('/')[-1]
    # Sanitize the filename by replacing invalid characters
    name = name.replace('?', '_')
    img_data = requests.get(img_url).content
    with open(directory + '/' + name, 'wb') as handler:
        handler.write(img_data)