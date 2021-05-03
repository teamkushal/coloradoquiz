import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1331Component } from './test-component1331.component';

describe('TestComponent1331Component', () => {
  let component: TestComponent1331Component;
  let fixture: ComponentFixture<TestComponent1331Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1331Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
