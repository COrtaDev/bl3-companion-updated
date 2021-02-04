from .db import db
from .loot_item import Loot_Item
from sqlalchemy.sql import func


class Loot_Drop(db.Model):
    __tablename__ = 'loot_drops'

    id = db.Column(db.Integer, primary_key=True)
    creator_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    message = db.Column(db.String(144), nullable=False)
    loot_id = db.Column(db.Integer, db.ForeignKey('loot_items.id'), nullable=False)
    level = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          server_onupdate=func.now())
    # *Define relationship tables:
    loot_item = db.relationship('Loot_item', foreign_keys=[loot_id])

    def to_dict(self):
        return {
            "id": self.id,
            "creator_id": self.creator_id,
            "message": self.message,
            "loot_id": self.loot_id,
            "level": self.level,
            "loot_item": self.loot_item.to_dict(),
            "created_at": self.created_at.__str__(),
            "update_at": self.update_at.__str__(),
        }
