from flask import request, url_for, current_app, jsonify
from app.api import bp
from app.extensions import db
from app.models.post import Post
from flask_login import login_required

@bp.route('/api/posts', methods=['POST'])
@login_required
def index():
    # posts = Post.query.all()
    if request.method == "POST":
        json_data = request.get_json()
        page = request.args.get('page', json_data['counter'], type=int)
        posts = Post.query.paginate(page=page, per_page=current_app.config['RESULTS_PER_PAGE'], error_out=False).items
        # print(posts[0].id, json_data['counter'])
        return jsonify([post.as_dict() for post in posts])
