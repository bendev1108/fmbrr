import { TestBed } from '@angular/core/testing';

import { PlotDetailService } from './plot-detail.service';

describe('PlotDetailService', () => {
  let service: PlotDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlotDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
