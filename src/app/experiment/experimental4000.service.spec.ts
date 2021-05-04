import { TestBed } from '@angular/core/testing';

import { Experimental4000Service } from './experimental4000.service';

describe('Experimental4000Service', () => {
  let service: Experimental4000Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental4000Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
