import { TestBed } from '@angular/core/testing';

import { Experimental476Service } from './experimental476.service';

describe('Experimental476Service', () => {
  let service: Experimental476Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental476Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
