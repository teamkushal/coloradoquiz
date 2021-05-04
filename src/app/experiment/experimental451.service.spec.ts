import { TestBed } from '@angular/core/testing';

import { Experimental451Service } from './experimental451.service';

describe('Experimental451Service', () => {
  let service: Experimental451Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental451Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
