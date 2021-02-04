import json
from app.models import db, Loot_Item

path = '/home/conrad/Documents/bl3Rework/bl3-companion-updated/app/seeds/'\
    'loot_data/loot.txt'


def seed_loot_items():
    # This will need to be changed when we deploy.
    f = open(path, "r")
    loot_data = f.read()
    loot_list = json.loads(loot_data)
    loot_seeds = [Loot_Item(item_name=loot['name'],
                            type=loot['type'],
                            elemental_types=loot['possibleElements'],
                            manufacturers=loot['possibleManufacturers'])
                  for loot in loot_list]
    db.session.add_all(loot_seeds)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the loot_items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_loot_items():
    db.session.execute('TRUNCATE loot_items;')
    db.session.commit()
