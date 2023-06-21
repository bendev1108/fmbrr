import { TestBed } from '@angular/core/testing';

import { ScqService } from './scq.service';

describe('ScqService', () => {
  let service: ScqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
