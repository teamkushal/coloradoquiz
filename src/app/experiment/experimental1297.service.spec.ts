import { TestBed } from '@angular/core/testing';

import { Experimental1297Service } from './experimental1297.service';

describe('Experimental1297Service', () => {
  let service: Experimental1297Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1297Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
