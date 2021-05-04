import { TestBed } from '@angular/core/testing';

import { Experimental1098Service } from './experimental1098.service';

describe('Experimental1098Service', () => {
  let service: Experimental1098Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1098Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
