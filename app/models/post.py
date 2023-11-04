from app.extensions import db

class Post(db.Model):
    # id = db.Column(db.Integer, primary_key=True)
    # title = db.Column(db.String(150))
    # content = db.Column(db.Text)

    id = db.Column(db.Integer, primary_key=True)
    video = db.Column(db.String(150))
    image = db.Column(db.String(150))
    name = db.Column(db.String(150))
    bio = db.Column(db.Text)

    def as_dict(self):
       return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __repr__(self):
        return f'<Post "{self.id}">'
    