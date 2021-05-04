import { TestBed } from '@angular/core/testing';

import { Experimental278Service } from './experimental278.service';

describe('Experimental278Service', () => {
  let service: Experimental278Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental278Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
