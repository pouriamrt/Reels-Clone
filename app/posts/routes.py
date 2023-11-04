from flask import render_template, request, url_for, current_app, jsonify
from app.posts import bp
from app.extensions import db
from app.models.post import Post
from flask_login import login_required

@bp.route('/')
@login_required
def index():
    # posts = Post.query.all()
    page = request.args.get('page', 1, type=int)
    posts = Post.query.paginate(page=page, per_page=current_app.config['RESULTS_PER_PAGE'], error_out=False)
    next_url = url_for('posts.index', page=posts.next_num) \
        if posts.has_next else None
    prev_url = url_for('posts.index', page=posts.prev_num) \
        if posts.has_prev else None
    return render_template('posts/index.html', next_url=next_url, prev_url=prev_url)
    # return render_template('posts/index.html', posts=posts.items, next_url=next_url, prev_url=prev_url)
