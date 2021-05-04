import { TestBed } from '@angular/core/testing';

import { Experimental257Service } from './experimental257.service';

describe('Experimental257Service', () => {
  let service: Experimental257Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental257Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
