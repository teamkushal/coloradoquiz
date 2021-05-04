import { TestBed } from '@angular/core/testing';

import { Experimental3816Service } from './experimental3816.service';

describe('Experimental3816Service', () => {
  let service: Experimental3816Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3816Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
