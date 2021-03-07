from flask import Blueprint, jsonify
from flask_login import login_required
# from app.loot_drop import Loot_Drop

# TODO:Register this Blueprint in the API
loot_routes = Blueprint('loot', __name__)

# @loot_routes.route("/new", methods=['POST'])
# def new_loot_drop():
