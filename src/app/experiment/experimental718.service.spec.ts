import { TestBed } from '@angular/core/testing';

import { Experimental718Service } from './experimental718.service';

describe('Experimental718Service', () => {
  let service: Experimental718Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental718Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
