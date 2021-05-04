import { TestBed } from '@angular/core/testing';

import { Experimental929Service } from './experimental929.service';

describe('Experimental929Service', () => {
  let service: Experimental929Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental929Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
