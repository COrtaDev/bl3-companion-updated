from .db import db
# from .user import User
# from .loot_drop import Loot_Drop
from sqlalchemy.sql import func


class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(144), nullable=False)
    loot_drop_id = db.Column(db.Integer, db.ForeignKey(
        'loot_drops.id'), nullable=False)
    commentor_id = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           server_default=func.now())
    update_at = db.Column(db.DateTime(timezone=True),
                          server_onupdate=func.now())

    # *Joins comments.commenter_id to users.id:
    # Allows us look at the user that the comment was made by...
    commentor = db.relationship('User', foreign_keys=[commentor_id])

    # *Joins comments.loot_drop_id to loot_drops.id:
    # Allows us to look at the loot_drop that was commented on...
    commented_loot = db.relationship('Loot_Drop', foreign_keys=[loot_drop_id])

    def to_dict(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "loot_drop_id": self.loot_drop_id,
            "commentor_id": self.commentor_id,
            "created_at": self.created_at.__str__(),
            "update_at": self.update_at.__str__(),
            "commentor": self.commentor.to_dict(),
            "commented_loot": self.commented_loot.to_dict(),
        }
