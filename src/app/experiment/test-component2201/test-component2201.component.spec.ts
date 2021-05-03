import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2201Component } from './test-component2201.component';

describe('TestComponent2201Component', () => {
  let component: TestComponent2201Component;
  let fixture: ComponentFixture<TestComponent2201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2201Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
