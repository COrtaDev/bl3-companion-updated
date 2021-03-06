from .db import db
from sqlalchemy.sql import func


class Loot_Drop(db.Model):
    __tablename__ = 'loot_drops'

    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    item_name = db.Column(db.String, nullable=False)
    level = db.Column(db.Integer)
    mayhem = db.Column(db.Integer)
    location = db.Column(db.String)
    elements = db.Column(db.ARRAY(db.String))
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          server_onupdate=func.now())

    # message = db.Column(db.String(144), nullable=False)
    # loot_id = db.Column(db.Integer, db.ForeignKey(
    #     'loot_items.id'), nullable=False)
    # *Joins loot_items.id to loot_drops.loot_id as loot:
    # Allows us to look at the loot_item that was found...
    # loot = db.relationship('Loot_Item', foreign_keys=[loot_id])

    # * Joins users.id to loot_drops.creator_id:
    # Allows us to look at the user who posted the loot_drop...
    creator = db.relationship('User', foreign_keys=[creator_id])

    def to_dict(self):
        return {
            "id": self.id,
            "creator_id": self.creator_id,
            "message": self.message,
            "loot_id": self.loot_id,
            "level": self.level,
            "created_at": self.created_at.__str__(),
            "update_at": self.update_at.__str__(),
            "loot": self.loot.to_dict(),
            "creator": self.creator.to_dict(),
        }
