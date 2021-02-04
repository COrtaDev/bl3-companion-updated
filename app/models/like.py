from .db import db
# from .user import User
# from .loot_drop import Loot_Drop
from sqlalchemy.sql import func


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    liker_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    loot_drop_id = db.Column(db.Integer, db.ForeignKey('loot_drops.id'))
    loot_drop_creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())

    liker = db.relationship('User', foreign_keys=[liker_id])
    loot_drop = db.relationship('Loot_Drop', foreign_keys=[loot_drop_id])
    loot_drop_creator = db.relationship(
        'User', foreign_keys=[loot_drop_creator_id])

    def to_dict(self):
        return {
            "id": self.id,
            "liker_id": self.liker_id,
            "loot_drop_creator_id": self.loot_drop_creator_id,
            "loot_drop_id": self.loot_drop_id,
            "created_at": self.created_at.__str__(),
            "liker": self.liker.to_dict(),
            "loot_drop": self.loot_drop.to_dict(),
            "loot_drop_creator": self.loot_drop_creator.to_dict(),
        }
