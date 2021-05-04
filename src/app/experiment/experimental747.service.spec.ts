import { TestBed } from '@angular/core/testing';

import { Experimental747Service } from './experimental747.service';

describe('Experimental747Service', () => {
  let service: Experimental747Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental747Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
