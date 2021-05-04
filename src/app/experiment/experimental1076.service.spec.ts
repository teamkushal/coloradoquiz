import { TestBed } from '@angular/core/testing';

import { Experimental1076Service } from './experimental1076.service';

describe('Experimental1076Service', () => {
  let service: Experimental1076Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1076Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
