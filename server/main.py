from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Request

from _sqlalchemy import engine
from models import Points, Polygons
from service import save_feature

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def create_tables():
    Points.__table__.create(engine)
    Polygons.__table__.create(engine)


@app.post("/features")
async def read_root(request: Request):
    data = await request.json()
    coordinates = data['coordinates']
    feature_type = data['type']
    category = data['category']
    save_feature(feature_type, coordinates, category)
    return {"Message": "Feature {feature_type} {coordinates} created successfully".format(feature_type=feature_type,
                                                                                          coordinates=coordinates)}
# create_tables()