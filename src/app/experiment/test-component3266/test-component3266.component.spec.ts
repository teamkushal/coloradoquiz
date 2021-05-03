import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3266Component } from './test-component3266.component';

describe('TestComponent3266Component', () => {
  let component: TestComponent3266Component;
  let fixture: ComponentFixture<TestComponent3266Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3266Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3266Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
