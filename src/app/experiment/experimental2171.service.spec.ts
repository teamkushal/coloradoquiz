import { TestBed } from '@angular/core/testing';

import { Experimental2171Service } from './experimental2171.service';

describe('Experimental2171Service', () => {
  let service: Experimental2171Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2171Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
