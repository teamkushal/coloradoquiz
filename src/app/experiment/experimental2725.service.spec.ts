import { TestBed } from '@angular/core/testing';

import { Experimental2725Service } from './experimental2725.service';

describe('Experimental2725Service', () => {
  let service: Experimental2725Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2725Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
