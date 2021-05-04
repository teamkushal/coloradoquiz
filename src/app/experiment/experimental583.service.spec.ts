import { TestBed } from '@angular/core/testing';

import { Experimental583Service } from './experimental583.service';

describe('Experimental583Service', () => {
  let service: Experimental583Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental583Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
