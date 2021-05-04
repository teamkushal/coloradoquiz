import { TestBed } from '@angular/core/testing';

import { Experimental1288Service } from './experimental1288.service';

describe('Experimental1288Service', () => {
  let service: Experimental1288Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1288Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
