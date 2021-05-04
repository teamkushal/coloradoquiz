import { TestBed } from '@angular/core/testing';

import { Experimental1380Service } from './experimental1380.service';

describe('Experimental1380Service', () => {
  let service: Experimental1380Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1380Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
