import json
from app.models import db, Loot_Item


def seed_loot_items():
    f = open("./loot_data/loot.txt", "r")
    loot_data = f.read()
    loot_list = json.loads(loot_data)
    loot_seeds = [Loot(item_name=loot['name'], type=loot['type'],
                       elemental_types=loot['possibleElements'],)
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