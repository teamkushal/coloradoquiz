import { TestBed } from '@angular/core/testing';

import { Experimental1629Service } from './experimental1629.service';

describe('Experimental1629Service', () => {
  let service: Experimental1629Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1629Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
