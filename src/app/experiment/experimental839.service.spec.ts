import { TestBed } from '@angular/core/testing';

import { Experimental839Service } from './experimental839.service';

describe('Experimental839Service', () => {
  let service: Experimental839Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental839Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
