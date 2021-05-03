import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1424Component } from './test-component1424.component';

describe('TestComponent1424Component', () => {
  let component: TestComponent1424Component;
  let fixture: ComponentFixture<TestComponent1424Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1424Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1424Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
