import { TestBed } from '@angular/core/testing';

import { Experimental614Service } from './experimental614.service';

describe('Experimental614Service', () => {
  let service: Experimental614Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental614Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
