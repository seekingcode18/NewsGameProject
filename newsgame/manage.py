#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys

# scraping
import requests
from bs4 import BeautifulSoup
import json

# response = requests.get('https://news.sky.com/')
response = requests.get('https://www.bbc.co.uk/news/newsbeat')

soup = BeautifulSoup(response.text, 'html.parser')

# results = soup.find_all(class_ = 'sdc-site-tile__headline-link')
results = soup.find_all(class_ = 'gs-c-promo-heading')
headlines = []

for result in results:
    # print(str(headline))
    headline_obj = {}
    # headline_obj['title'] = str(result.get_text())
    headline_obj['title'] = str(result.h3.get_text())
    headline_obj['url'] = 'https://www.bbc.co.uk' + str(result['href'])
    # print(headline_obj)
    headlines.append(headline_obj)

print(headlines)

with open('headlines.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(headlines))


# # BBC Newsbeats
# # normal heading
# gs-c-promo-heading gs-o-faux-block-link__overlay-link gel-pica-bold nw-o-link-split__anchor

# # featured heading
# gs-c-promo-heading gs-o-faux-block-link__overlay-link gel-double-pica-bold nw-o-link-split__anchor

# # below the fold feature
# gs-c-promo-heading sr-c-two-slice__link gs-o-faux-block-link__overlay-link

# # below the fold normal heading
# gs-c-promo-heading gs-o-faux-block-link__overlay-link gel-pica-bold nw-o-link-split__anchor





def main():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'newsgame.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
