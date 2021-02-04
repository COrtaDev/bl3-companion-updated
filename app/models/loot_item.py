from .db import db


class Loot_Item(db.Model):
    __tablename__ = 'loot_items'

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable=False)
    elemental_types = db.Column(db.ARRAY(db.String), nullable=False)
    manufacturers = db.Column(db.ARRAY(db.String), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "item_name": self.item_name,
            "type": self.type,
            "splash_dmg": self.splash_dmg,
            "elemental_types": self.elemental_types,
            "manufacturers": self.manufacturers,
        }
