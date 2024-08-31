import Measurement from '../models/measurement';
import { MeasurementDto } from '../dtos/measurementDto';

class MeasurementRepository {
  async create(measurementData: MeasurementDto): Promise<Measurement> {
    return Measurement.create(measurementData);
  }

  async findById(id: string): Promise<Measurement | null> {
    return Measurement.findByPk(id);
  }
}

export default new MeasurementRepository();