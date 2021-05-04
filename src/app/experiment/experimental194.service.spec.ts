import { TestBed } from '@angular/core/testing';

import { Experimental194Service } from './experimental194.service';

describe('Experimental194Service', () => {
  let service: Experimental194Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental194Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
