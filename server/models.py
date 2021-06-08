from geoalchemy2 import Geometry
from sqlalchemy import Column, Integer, String

from _sqlalchemy import Base


class Points(Base):
    __tablename__ = "points"

    id = Column(Integer, primary_key=True, index=True)
    category = Column(String, default='A')
    geom = Column(Geometry('POINT'))


class Polygons(Base):
    __tablename__ = "polygons"

    id = Column(Integer, primary_key=True, index=True)
    geom = Column(Geometry('POLYGON'))
