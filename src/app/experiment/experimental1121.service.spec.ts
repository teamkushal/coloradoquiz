import { TestBed } from '@angular/core/testing';

import { Experimental1121Service } from './experimental1121.service';

describe('Experimental1121Service', () => {
  let service: Experimental1121Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1121Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
