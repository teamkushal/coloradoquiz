import { TestBed } from '@angular/core/testing';

import { Experimental241Service } from './experimental241.service';

describe('Experimental241Service', () => {
  let service: Experimental241Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental241Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
