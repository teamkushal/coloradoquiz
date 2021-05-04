import { TestBed } from '@angular/core/testing';

import { Experimental878Service } from './experimental878.service';

describe('Experimental878Service', () => {
  let service: Experimental878Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental878Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
